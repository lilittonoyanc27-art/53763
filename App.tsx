/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Search,
  RotateCcw,
  Star,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Headphones,
  Zap,
  MessageSquare,
  FileText,
  BookmarkCheck,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Trophy,
  Filter,
  Sliders,
  Check,
  Share2,
  Volume1,
  GraduationCap
} from 'lucide-react';

import {
  ALL_QUESTIONS,
  MODULE1_SCHOOL_QA,
  MODULE1_FOOTBALL_QA,
  COACH_ORDERS,
  MODULE1_LENGUA_QA,
  MODULE1_MATH_QA,
  MODULE1_MATH_FOOTBALL_QA,
  MODULE1_CONV_A,
  MODULE1_CONV_B,
  MODULE1_CONV_C,
  MODULE1_RAPID_RESPONSES,
  DIALOGUES,
  MODULE2_CONV_50,
  MODULE3_MATH_20,
  MODULE4_LENGUA_20,
  READING_COMPREHENSION,
  MODULE5_QUICK_20,
  MODULE6_INSTITUTO_50,
  QAItem,
  CoachOrder,
  Dialogue
} from './data.ts';

import { playSpanishSpeech, stopSpanishSpeech } from './speech.ts';

type ActiveTab =
  | 'all'
  | 'instituto'
  | 'game'
  | 'blitz'
  | 'dialogues'
  | 'reading'
  | 'coach'
  | 'quick20'
  | 'favorites'
  | 'guide';

type CategoryFilter =
  | 'all'
  | 'instituto'
  | 'school'
  | 'football'
  | 'conversation'
  | 'math'
  | 'lengua';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  // Font size setting (defaults to 'lg' for large, comfortable reading)
  type FontSize = 'md' | 'lg' | 'xl';
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    try {
      const saved = localStorage.getItem('es_hy_font_size');
      return (saved as FontSize) || 'lg';
    } catch {
      return 'lg';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('es_hy_font_size', fontSize);
    } catch {
      // ignore
    }
  }, [fontSize]);

  // Search
  const [searchQuery, setSearchQuery] = useState('');

  // Audio settings
  const [speechRate, setSpeechRate] = useState<number>(1.0); // 1.0 = normal, 0.8 = slow
  const [currentlySpeakingId, setCurrentlySpeakingId] = useState<string | null>(null);

  // Global translation visibility toggle
  const [allTranslationsVisible, setAllTranslationsVisible] = useState<boolean>(false);

  // Reset toast feedback
  const [resetToast, setResetToast] = useState(false);

  // Individual card state tracking
  // openedTranslations: Set of IDs for which the Armenian question translation is open
  const [openedTranslations, setOpenedTranslations] = useState<Record<string, boolean>>({});
  // openedAnswers: Set of IDs for which the answer (Spanish + Armenian) is revealed
  const [openedAnswers, setOpenedAnswers] = useState<Record<string, boolean>>({});
  // openedAnswerTranslations: for cards where answer Spanish is shown and user clicked answer to reveal Armenian
  const [openedAnswerTranslations, setOpenedAnswerTranslations] = useState<Record<string, boolean>>({});

  // Global Reset handler (Кнопка общий сброс)
  const handleGlobalReset = () => {
    stopSpanishSpeech();
    setCurrentlySpeakingId(null);
    setOpenedTranslations({});
    setOpenedAnswers({});
    setOpenedAnswerTranslations({});
    setAllTranslationsVisible(false);
    setSearchQuery('');
    setActiveCategory('all');
    setResetToast(true);
    setTimeout(() => setResetToast(false), 2500);
  };

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('es_hy_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('es_hy_favs', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Audio playback function
  const handleSpeak = (text: string, id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentlySpeakingId === id) {
      stopSpanishSpeech();
      setCurrentlySpeakingId(null);
      return;
    }
    setCurrentlySpeakingId(id);
    playSpanishSpeech(
      text,
      speechRate,
      () => setCurrentlySpeakingId(id),
      () => setCurrentlySpeakingId(null),
      () => setCurrentlySpeakingId(null)
    );
  };

  // Toggle translation on click
  const toggleTranslation = (id: string) => {
    setOpenedTranslations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Click on Spanish text: reveals Armenian question translation AND answers
  const toggleSpanishClick = (id: string) => {
    const isCurrentlyOpen = openedTranslations[id] || openedAnswers[id];
    setOpenedTranslations(prev => ({ ...prev, [id]: !isCurrentlyOpen }));
    setOpenedAnswers(prev => ({ ...prev, [id]: !isCurrentlyOpen }));
    setOpenedAnswerTranslations(prev => ({ ...prev, [id]: !isCurrentlyOpen }));
  };

  // Toggle answer
  const toggleAnswer = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpenedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle answer translation
  const toggleAnswerTranslation = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpenedAnswerTranslations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter datasets
  const filteredQuestions = useMemo(() => {
    let list: QAItem[] = [];

    if (activeTab === 'instituto' || activeCategory === 'instituto') {
      list = MODULE6_INSTITUTO_50;
    } else if (activeCategory === 'school') {
      list = [
        ...MODULE1_SCHOOL_QA,
        ...MODULE2_CONV_50.filter(q => q.subcategory === 'Դպրոց'),
        ...MODULE6_INSTITUTO_50.filter(q => q.subcategory === 'Դասարանում' || q.category.includes('Դպրոց'))
      ];
    } else if (activeCategory === 'football') {
      list = [
        ...MODULE1_FOOTBALL_QA,
        ...MODULE1_MATH_FOOTBALL_QA,
        ...MODULE2_CONV_50.filter(q => q.subcategory === 'Ֆուտբոլ'),
        ...MODULE3_MATH_20.filter(q => q.category.includes('Ֆուտբոլ'))
      ];
    } else if (activeCategory === 'conversation') {
      list = [
        ...MODULE1_CONV_A,
        ...MODULE1_CONV_B,
        ...MODULE1_CONV_C,
        ...MODULE2_CONV_50,
        ...MODULE6_INSTITUTO_50
      ];
    } else if (activeCategory === 'math') {
      list = [
        ...MODULE1_MATH_QA,
        ...MODULE1_MATH_FOOTBALL_QA,
        ...MODULE3_MATH_20,
        ...MODULE6_INSTITUTO_50.filter(q => q.tag === 'Մաթեմատիկա')
      ];
    } else if (activeCategory === 'lengua') {
      list = [
        ...MODULE1_LENGUA_QA,
        ...MODULE4_LENGUA_20,
        ...MODULE6_INSTITUTO_50.filter(q => q.tag === 'Lengua')
      ];
    } else {
      list = ALL_QUESTIONS;
    }

    if (activeTab === 'favorites') {
      list = list.filter(q => favorites.includes(q.id));
    }

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase().trim();
    return list.filter(
      item =>
        item.esQuestion.toLowerCase().includes(query) ||
        item.hyQuestion.toLowerCase().includes(query) ||
        (item.esAnswer && item.esAnswer.toLowerCase().includes(query)) ||
        (item.hyAnswer && item.hyAnswer.toLowerCase().includes(query)) ||
        (item.tag && item.tag.toLowerCase().includes(query)) ||
        (item.category && item.category.toLowerCase().includes(query))
    );
  }, [activeCategory, activeTab, searchQuery, favorites]);

  // -----------------------------------------------------------------
  // GAME MODE STATE: «Լովի նա սլուխ» (Escucha y responde)
  // -----------------------------------------------------------------
  const [gamePool, setGamePool] = useState<QAItem[]>([]);
  const [gameIndex, setGameIndex] = useState(0);
  const [gameRevealedHint, setGameRevealedHint] = useState(false);
  const [gameRevealedAnswer, setGameRevealedAnswer] = useState(false);
  const [gameScore, setGameScore] = useState({ known: 0, review: 0 });
  const [gameBlindMode, setGameBlindMode] = useState(true); // default true: audio first, text hidden
  const [gameAutoPlay, setGameAutoPlay] = useState(true);

  // Initialize game
  const initGame = (category: string = 'all') => {
    let pool: QAItem[] = [];
    if (category === 'instituto') pool = [...MODULE6_INSTITUTO_50];
    else if (category === 'school') pool = [...MODULE1_SCHOOL_QA, ...MODULE2_CONV_50.slice(0, 10), ...MODULE6_INSTITUTO_50.slice(0, 10)];
    else if (category === 'football') pool = [...MODULE1_FOOTBALL_QA, ...MODULE2_CONV_50.slice(30, 40)];
    else if (category === 'math') pool = [...MODULE1_MATH_QA, ...MODULE3_MATH_20];
    else if (category === 'lengua') pool = [...MODULE1_LENGUA_QA, ...MODULE4_LENGUA_20];
    else pool = [...ALL_QUESTIONS];

    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setGamePool(shuffled);
    setGameIndex(0);
    setGameRevealedHint(false);
    setGameRevealedAnswer(false);
    setGameScore({ known: 0, review: 0 });

    if (shuffled.length > 0 && gameAutoPlay) {
      setTimeout(() => {
        handleSpeak(shuffled[0].esQuestion, 'game-q');
      }, 300);
    }
  };

  useEffect(() => {
    if (activeTab === 'game' && gamePool.length === 0) {
      initGame();
    }
  }, [activeTab]);

  const nextGameCard = (known: boolean) => {
    setGameScore(prev => ({
      known: known ? prev.known + 1 : prev.known,
      review: !known ? prev.review + 1 : prev.review
    }));

    if (gameIndex + 1 < gamePool.length) {
      const nextIdx = gameIndex + 1;
      setGameIndex(nextIdx);
      setGameRevealedHint(false);
      setGameRevealedAnswer(false);
      if (gameAutoPlay) {
        setTimeout(() => {
          handleSpeak(gamePool[nextIdx].esQuestion, 'game-q');
        }, 200);
      }
    } else {
      // Completed pool
      setGameRevealedAnswer(true);
      setGameRevealedHint(true);
    }
  };

  // -----------------------------------------------------------------
  // BLITZ MODE STATE: Speed challenge
  // -----------------------------------------------------------------
  const blitzItems = useMemo(() => {
    return [
      ...MODULE1_RAPID_RESPONSES.map(r => ({
        id: r.id,
        esQ: r.esQuestion,
        hyQ: r.hyQuestion,
        esA: r.esAnswer,
        hyA: r.hyAnswer,
        type: 'Արագ հրահանգ'
      })),
      ...MODULE5_QUICK_20.map(q => ({
        id: q.id,
        esQ: q.questionEs,
        hyQ: q.questionHy,
        esA: q.answerEs,
        hyA: q.answerHy,
        type: 'Առանց մտածելու'
      })),
      ...COACH_ORDERS.map(c => ({
        id: c.id,
        esQ: c.orderEs,
        hyQ: c.orderHy,
        esA: c.responseEs,
        hyA: c.responseHy,
        type: 'Մարզչի հրահանգ'
      }))
    ];
  }, []);

  const [blitzIdx, setBlitzIdx] = useState(0);
  const [blitzTimer, setBlitzTimer] = useState<number>(10);
  const [blitzIsActive, setBlitzIsActive] = useState<boolean>(false);
  const [blitzShowAnswer, setBlitzShowAnswer] = useState(false);
  const blitzIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startBlitz = (index = 0) => {
    setBlitzIdx(index);
    setBlitzTimer(10);
    setBlitzShowAnswer(false);
    setBlitzIsActive(true);
    const item = blitzItems[index];
    if (item) {
      handleSpeak(item.esQ, 'blitz-q');
    }
  };

  useEffect(() => {
    if (blitzIsActive && !blitzShowAnswer && blitzTimer > 0) {
      blitzIntervalRef.current = setInterval(() => {
        setBlitzTimer(t => {
          if (t <= 1) {
            setBlitzShowAnswer(true);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } else {
      if (blitzIntervalRef.current) clearInterval(blitzIntervalRef.current);
    }
    return () => {
      if (blitzIntervalRef.current) clearInterval(blitzIntervalRef.current);
    };
  }, [blitzIsActive, blitzShowAnswer, blitzTimer]);

  const nextBlitz = () => {
    if (blitzIdx + 1 < blitzItems.length) {
      startBlitz(blitzIdx + 1);
    } else {
      startBlitz(0);
    }
  };

  // Dynamic font sizing classes
  const fontClasses = {
    // Spanish question/statement text
    questionEs:
      fontSize === 'xl'
        ? 'text-2xl sm:text-3xl font-black leading-snug'
        : fontSize === 'lg'
        ? 'text-xl sm:text-2xl font-extrabold leading-snug'
        : 'text-lg sm:text-xl font-bold leading-snug',
    // Armenian question translation text
    questionHy:
      fontSize === 'xl'
        ? 'text-lg sm:text-xl font-bold leading-relaxed'
        : fontSize === 'lg'
        ? 'text-base sm:text-lg font-semibold leading-relaxed'
        : 'text-sm sm:text-base font-semibold leading-relaxed',
    // Spanish answer text
    answerEs:
      fontSize === 'xl'
        ? 'text-xl sm:text-2xl font-black leading-snug'
        : fontSize === 'lg'
        ? 'text-lg sm:text-xl font-bold leading-snug'
        : 'text-base sm:text-lg font-bold leading-snug',
    // Armenian answer translation text
    answerHy:
      fontSize === 'xl'
        ? 'text-base sm:text-lg font-semibold leading-relaxed'
        : fontSize === 'lg'
        ? 'text-sm sm:text-base font-semibold leading-relaxed'
        : 'text-xs sm:text-sm font-semibold leading-relaxed',
    // Coach order / rapid prompt
    promptBig:
      fontSize === 'xl'
        ? 'text-2xl sm:text-3xl font-black'
        : fontSize === 'lg'
        ? 'text-xl sm:text-2xl font-black'
        : 'text-lg sm:text-xl font-bold',
    // Dialogue lines
    dialogueEs:
      fontSize === 'xl'
        ? 'text-xl sm:text-2xl font-black'
        : fontSize === 'lg'
        ? 'text-lg sm:text-xl font-bold'
        : 'text-base sm:text-lg font-bold',
    dialogueHy:
      fontSize === 'xl'
        ? 'text-base sm:text-lg font-semibold'
        : fontSize === 'lg'
        ? 'text-sm sm:text-base font-semibold'
        : 'text-xs sm:text-sm font-medium',
    // Story text
    readingText:
      fontSize === 'xl'
        ? 'text-xl sm:text-2xl leading-loose font-medium'
        : fontSize === 'lg'
        ? 'text-lg sm:text-xl leading-relaxed font-medium'
        : 'text-base sm:text-lg leading-relaxed font-medium',
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header / Banner */}
      <header className="bg-gradient-to-r from-red-600 via-amber-600 to-indigo-700 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎧</span>
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  ¡Escucha y responde rápido!
                </h1>
                <span className="hidden sm:inline-block bg-yellow-400 text-slate-900 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  1.º ESO | A1–B1
                </span>
              </div>
              <p className="text-amber-100 text-sm sm:text-base font-medium mt-0.5">
                Լսի՛ր և արագ պատասխանի՛ր — Իսպաներեն + Հայերեն (7-րդ դասարան)
              </p>
            </div>

            {/* Quick Audio, Font Size & Global Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Font size switcher (Шрифт побольше) */}
              <div className="flex items-center bg-black/25 rounded-lg p-1 backdrop-blur-sm border border-white/10 text-xs">
                <span className="px-2 text-amber-200 font-bold hidden sm:inline">Շրիֆտ:</span>
                <button
                  type="button"
                  onClick={() => setFontSize('md')}
                  className={`px-2 py-1 rounded font-bold transition ${
                    fontSize === 'md'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                  title="Սովորական շրիֆտ (A)"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('lg')}
                  className={`px-2.5 py-1 rounded font-bold transition ${
                    fontSize === 'lg'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                  title="Մեծ շրիֆտ (A+)"
                >
                  A+ (Մեծ)
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('xl')}
                  className={`px-2.5 py-1 rounded font-bold transition ${
                    fontSize === 'xl'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                  title="Շատ մեծ շրիֆտ (A++)"
                >
                  A++ (Խոշոր)
                </button>
              </div>

              {/* Speech rate toggle */}
              <div className="flex items-center bg-black/25 rounded-lg p-1 backdrop-blur-sm border border-white/10 text-xs">
                <span className="px-2 text-amber-200 font-semibold hidden sm:inline">Արագություն:</span>
                <button
                  type="button"
                  onClick={() => setSpeechRate(1.0)}
                  className={`px-2 py-1 rounded font-bold transition ${
                    speechRate === 1.0
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                  title="Նորմալ արագություն (1.0x)"
                >
                  1.0x
                </button>
                <button
                  type="button"
                  onClick={() => setSpeechRate(0.8)}
                  className={`px-2 py-1 rounded font-bold transition ${
                    speechRate === 0.8
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                  title="Դանդաղ արագություն (0.8x)՝ սովորողի համար"
                >
                  0.8x 🐢
                </button>
              </div>

              {/* Reveal all translations button */}
              <button
                type="button"
                onClick={() => setAllTranslationsVisible(!allTranslationsVisible)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition border shadow-sm ${
                  allTranslationsVisible
                    ? 'bg-emerald-500 text-white border-emerald-400'
                    : 'bg-white/15 text-white border-white/20 hover:bg-white/25'
                }`}
                title="Բացել կամ փակել բոլոր թարգմանությունները"
              >
                {allTranslationsVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>{allTranslationsVisible ? 'Թաքցնել թարգմ.' : 'Բացել թարգմ.'}</span>
              </button>

              {/* Global Reset button (Общий сброс) */}
              <button
                type="button"
                onClick={handleGlobalReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition border border-rose-400/40 bg-rose-500/20 hover:bg-rose-500 text-white shadow-sm"
                title="Զրոյացնել բոլոր բացված թարգմանությունները և պատասխանները (Общий сброс)"
              >
                <RotateCcw size={14} />
                <span>Զրոյացնել / Сброс</span>
              </button>
            </div>
          </div>

          {/* Interactive Hint Banner */}
          <div className="mt-2 text-xs bg-amber-400/20 border border-amber-300/30 rounded-lg px-3 py-1.5 flex items-center justify-between text-amber-100">
            <span className="flex items-center gap-1.5">
              <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded">ԽՈՐՀՈՒՐԴ</span>
              <span>
                <strong>Սեղմի՛ր իսպաներեն ցանկացած տեքստի վրա</strong>՝ հայերեն թարգմանությունը և պատասխանը բացելու համար։ Սեղմի՛ր 🔊 կոճակը՝ արտասանությունը լսելու համար։
              </span>
            </span>
            <span className="hidden md:inline font-mono opacity-80">Ընդհանուր՝ {ALL_QUESTIONS.length} հարց ու պատասխան</span>
          </div>
        </div>

        {/* Primary Tabs Navigation */}
        <div className="bg-slate-900/60 backdrop-blur border-t border-white/10 px-4">
          <div className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto py-2 text-xs sm:text-sm no-scrollbar">
            <button
              onClick={() => {
                setActiveTab('all');
                setActiveCategory('all');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <BookOpen size={16} />
              <span>Ամբողջ նյութը ({ALL_QUESTIONS.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('instituto');
                setActiveCategory('all');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'instituto'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>🏫 Դպրոցում (Instituto 50)</span>
            </button>

            <button
              onClick={() => setActiveTab('game')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'game'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Headphones size={16} />
              <span>«Լովի նա սլուխ» խաղ</span>
            </button>

            <button
              onClick={() => setActiveTab('coach')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'coach'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>⚡ Մարզչի հրահանգներ (10)</span>
            </button>

            <button
              onClick={() => setActiveTab('quick20')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'quick20'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>🚀 Կարճ արձագանքներ (35)</span>
            </button>

            <button
              onClick={() => setActiveTab('blitz')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'blitz'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Zap size={16} />
              <span>Արագ արձագանքի թայմեր</span>
            </button>

            <button
              onClick={() => setActiveTab('dialogues')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'dialogues'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <MessageSquare size={16} />
              <span>Երկխոսություններ ({DIALOGUES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('reading')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'reading'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <FileText size={16} />
              <span>Ընթերցանության տեքստ</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'favorites'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Star size={16} />
              <span>Պահպանված ({favorites.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
                activeTab === 'guide'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <GraduationCap size={16} />
              <span>Ուսուցչի ուղեցույց</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto w-full px-4 py-6 flex-1">
        {/* ========================================================= */}
        {/* TAB 1: ALL QUESTIONS & INSTITUTO BROWSE */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'instituto') && (
          <div>
            {/* Instituto 50 Special Header Banner */}
            {activeTab === 'instituto' && (
              <div className="mb-6 p-6 rounded-3xl bg-gradient-to-r from-purple-800 via-indigo-800 to-amber-600 text-white shadow-md border border-white/10">
                <div className="flex items-start gap-4">
                  <span className="text-3xl sm:text-4xl p-2.5 bg-white/10 rounded-2xl">🏫</span>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded">
                      1.º de ESO (7-րդ դասարան) · 50 Հարց ու պատասխան
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black mt-1.5">
                      Preguntas y respuestas en el instituto — Հարցեր և պատասխաններ դպրոցում
                    </h2>
                    <p className="text-indigo-100 text-xs sm:text-sm mt-1 leading-relaxed">
                      50 տարբեր խոսակցական հարց ու պատասխան՝ իսպաներեն և հայերեն։ Իրական իրավիճակներ իսպանական դպրոցում՝ ուսուցիչների, դասընկերների, դասերի, ընդմիջումների, քննությունների և ֆուտբոլի մասին։
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 text-[11px] font-bold">
                      <span className="bg-white/15 px-2.5 py-1 rounded-lg">1. En clase (1–10)</span>
                      <span className="bg-white/15 px-2.5 py-1 rounded-lg">2. Con los compañeros (11–20)</span>
                      <span className="bg-white/15 px-2.5 py-1 rounded-lg">3. Matemáticas y Lengua (21–30)</span>
                      <span className="bg-white/15 px-2.5 py-1 rounded-lg">4. Situaciones inesperadas (31–40)</span>
                      <span className="bg-white/15 px-2.5 py-1 rounded-lg">5. Responde rápido (41–50)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Filter Bar & Search */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                {/* Search input */}
                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Փնտրել իսպաներեն կամ հայերեն բառերով (օրինակ՝ deberes, futbol, մաթեմատիկա)..."
                    className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    >
                      <RotateCcw size={14} />
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs font-semibold no-scrollbar">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-2 rounded-xl transition whitespace-nowrap ${
                      activeCategory === 'all'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Բոլորը ({ALL_QUESTIONS.length})
                  </button>
                  <button
                    onClick={() => setActiveCategory('instituto')}
                    className={`px-3 py-2 rounded-xl transition whitespace-nowrap ${
                      activeCategory === 'instituto'
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    🏫 Instituto 50
                  </button>
                  <button
                    onClick={() => setActiveCategory('school')}
                    className={`px-3 py-2 rounded-xl transition whitespace-nowrap ${
                      activeCategory === 'school'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    🏫 Դպրոցում
                  </button>
                  <button
                    onClick={() => setActiveCategory('football')}
                    className={`px-3 py-2 rounded-xl transition whitespace-nowrap ${
                      activeCategory === 'football'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    ⚽ Ֆուտբոլ
                  </button>
                  <button
                    onClick={() => setActiveCategory('conversation')}
                    className={`px-3 py-2 rounded-xl transition whitespace-nowrap ${
                      activeCategory === 'conversation'
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    🗣️ Խոսակցական
                  </button>
                  <button
                    onClick={() => setActiveCategory('math')}
                    className={`px-3 py-2 rounded-xl transition whitespace-nowrap ${
                      activeCategory === 'math'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    📐 Մաթեմատիկա
                  </button>
                  <button
                    onClick={() => setActiveCategory('lengua')}
                    className={`px-3 py-2 rounded-xl transition whitespace-nowrap ${
                      activeCategory === 'lengua'
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    📖 Lengua Castellana
                  </button>
                </div>
              </div>

              {/* Status information */}
              <div className="flex items-center justify-between text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                <span>
                  Գտնվել է <strong>{filteredQuestions.length}</strong> հարց / առաջադրանք
                </span>
                <span className="text-amber-700 font-medium">
                  👆 Սեղմիր իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար
                </span>
              </div>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredQuestions.map((item, index) => {
                const isTranslationOpen =
                  allTranslationsVisible || openedTranslations[item.id];
                const isAnswerOpen = openedAnswers[item.id];
                const isAnswerTranslationOpen =
                  allTranslationsVisible || openedAnswerTranslations[item.id];
                const isFav = favorites.includes(item.id);
                const isSpeaking = currentlySpeakingId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                      isSpeaking
                        ? 'border-amber-500 ring-2 ring-amber-300'
                        : 'border-slate-200 hover:border-amber-400/70'
                    }`}
                  >
                    {/* Card Top: Header badge + fav button */}
                    <div className="p-4 pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {item.tag || 'Հարց'}
                          {item.number ? ` · #${item.number}` : ` · #${index + 1}`}
                        </span>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={e => toggleFavorite(item.id, e)}
                            className={`p-1.5 rounded-lg transition ${
                              isFav
                                ? 'text-amber-500 hover:text-amber-600 bg-amber-50'
                                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                            }`}
                            title={isFav ? 'Հեռացնել պահպանվածներից' : 'Պահպանել հարցը'}
                          >
                            <Star size={17} className={isFav ? 'fill-amber-400' : ''} />
                          </button>
                        </div>
                      </div>

                      {/* Question in Spanish (CLICKABLE TO OPEN ARMENIAN TRANSLATION & ANSWERS) */}
                      <div
                        onClick={() => toggleSpanishClick(item.id)}
                        className="group cursor-pointer rounded-xl p-3 bg-amber-50/50 hover:bg-amber-100/60 border border-amber-200/60 transition"
                        title="Սեղմի՛ր՝ հայերեն թարգմանությունը և պատասխանը բացելու համար"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                                🇪🇸 Español (Հարց / Հրահանգ)
                              </span>
                              <span className="text-[10px] text-amber-700 bg-amber-200/60 px-1.5 py-0.2 rounded font-medium opacity-80 group-hover:opacity-100 transition">
                                👆 Սեղմիր թարգմանության և պատասխանի համար
                              </span>
                            </div>
                            <p className={`${fontClasses.questionEs} text-slate-900 mt-1`}>
                              {item.esQuestion}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={e => handleSpeak(item.esQuestion, item.id, e)}
                            className={`p-2.5 rounded-xl transition shadow-sm ${
                              isSpeaking
                                ? 'bg-amber-500 text-white animate-pulse'
                                : 'bg-white text-slate-700 hover:bg-amber-500 hover:text-white border border-slate-200'
                            }`}
                            title="Լսել իսպաներեն արտասանությունը"
                          >
                            <Volume2 size={20} />
                          </button>
                        </div>
                      </div>

                      {/* Armenian Translation of Question (Revealed when clicked) */}
                      {isTranslationOpen ? (
                        <div
                          onClick={() => toggleTranslation(item.id)}
                          className="mt-2.5 p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 cursor-pointer animate-fadeIn"
                        >
                          <div className="flex items-center justify-between text-xs font-bold text-indigo-700 mb-1">
                            <span className="flex items-center gap-1">
                              <span>🇦🇲 Հայերեն իմաստը</span>
                            </span>
                            <span className="text-[10px] text-indigo-500">Սեղմիր՝ փակելու համար</span>
                          </div>
                          <p className={`${fontClasses.questionHy} text-indigo-950`}>
                            {item.hyQuestion}
                          </p>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleTranslation(item.id)}
                          className="w-full mt-2 py-2 text-xs sm:text-sm text-indigo-600 hover:text-indigo-800 font-bold flex items-center justify-center gap-1.5 bg-indigo-50/50 hover:bg-indigo-100/60 rounded-xl transition border border-dashed border-indigo-200"
                        >
                          <Eye size={15} />
                          <span>Ցույց տալ հայերեն թարգմանությունը</span>
                        </button>
                      )}

                      {/* Math Solution Hint if available */}
                      {item.solution && isAnswerOpen && (
                        <div className="mt-2.5 px-3 py-2 bg-blue-50/70 border border-blue-200 rounded-xl text-xs sm:text-sm text-blue-900 font-mono">
                          <strong>Լուծում՝</strong> {item.solution}
                        </div>
                      )}

                      {/* Answer Section */}
                      {item.esAnswer && (
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          {isAnswerOpen ? (
                            <div className="space-y-2">
                              {/* Spanish Answer Box (Clickable to reveal Armenian Answer Translation) */}
                              <div
                                onClick={e => toggleAnswerTranslation(item.id, e)}
                                className="group cursor-pointer rounded-xl p-3 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 transition"
                                title="Սեղմիր՝ պատասխանի հայերեն թարգմանությունը տեսնելու համար"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                                        🇪🇸 Respuesta (Պատասխան)
                                      </span>
                                      <span className="text-[10px] text-emerald-700 bg-emerald-200/60 px-1.5 py-0.2 rounded font-medium opacity-80 group-hover:opacity-100 transition">
                                        👆 Սեղմիր թարգմանության համար
                                      </span>
                                    </div>
                                    <p className={`${fontClasses.answerEs} text-slate-900 mt-1`}>
                                      {item.esAnswer}
                                    </p>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={e =>
                                      handleSpeak(item.esAnswer!, `${item.id}-ans`, e)
                                    }
                                    className="p-2 rounded-lg bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition shadow-sm"
                                    title="Լսել պատասխանի արտասանությունը"
                                  >
                                    <Volume2 size={18} />
                                  </button>
                                </div>
                              </div>

                              {/* Armenian Answer Translation */}
                              {isAnswerTranslationOpen && item.hyAnswer && (
                                <div
                                  onClick={e => toggleAnswerTranslation(item.id, e)}
                                  className={`p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 cursor-pointer animate-fadeIn ${fontClasses.answerHy}`}
                                >
                                  <span className="text-[10px] text-slate-500 font-bold block mb-1">
                                    🇦🇲 Պատասխանի հայերեն իմաստը
                                  </span>
                                  <p>{item.hyAnswer}</p>
                                </div>
                              )}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Toggle Answer button */}
                    {item.esAnswer && (
                      <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                        <button
                          type="button"
                          onClick={e => toggleAnswer(item.id, e)}
                          className={`flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-lg transition ${
                            isAnswerOpen
                              ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                              : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                          }`}
                        >
                          {isAnswerOpen ? (
                            <>
                              <EyeOff size={14} />
                              <span>Թաքցնել պատասխանը</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={14} />
                              <span>Ցույց տալ պատասխանը (Respuesta)</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleTranslation(item.id)}
                          className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
                        >
                          <span>{isTranslationOpen ? 'Փակել հայերենը' : 'Հայերեն թարգմ.'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredQuestions.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <Search size={40} className="mx-auto text-slate-300 mb-3" />
                <h3 className="text-lg font-bold text-slate-700">Ոչինչ չի գտնվել</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Փորձեք փոխել որոնման բառը կամ ընտրել այլ բաժին։
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-sm"
                >
                  Մաքրել որոնումը
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: «ԼՈՎԻ ՆԱ ՍԼՈՒԽ» GAME MODE (🎧 Escucha y responde)  */}
        {/* ========================================================= */}
        {activeTab === 'game' && (
          <div className="max-w-2xl mx-auto">
            {/* Game Instructions Accordion */}
            <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white rounded-2xl p-5 shadow-lg mb-6">
              <div className="flex items-start gap-3">
                <span className="text-3xl p-2 bg-white/20 rounded-xl">🎧</span>
                <div>
                  <h2 className="text-xl font-black">
                    Ինչպես անցկացնել «Լովի նա սլուխ» խաղը
                  </h2>
                  <p className="text-amber-100 text-xs sm:text-sm mt-1 leading-relaxed">
                    1. Սկզբում լսեք կամ բարձրաձայն կարդացեք միայն իսպաներեն հարցը։<br />
                    2. Աշակերտը պետք է անմիջապես պատասխանի իսպաներեն։<br />
                    3. Եթե դժվարանում է, ցույց տվեք հայերեն իմաստը, ապա պատրաստի պատասխանը։
                  </p>
                </div>
              </div>

              {/* Game filter options */}
              <div className="mt-4 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Թեմա՝</span>
                  <select
                    onChange={e => initGame(e.target.value)}
                    className="bg-white/20 text-white rounded-lg px-2.5 py-1 font-bold border border-white/30 focus:outline-none cursor-pointer"
                  >
                    <option value="all" className="text-slate-900">Բոլոր հարցերը (Խառը)</option>
                    <option value="instituto" className="text-slate-900">🏫 Դպրոցում 50 (Instituto)</option>
                    <option value="school" className="text-slate-900">🏫 Դպրոցում (Colegio)</option>
                    <option value="football" className="text-slate-900">⚽ Ֆուտբոլում (Fútbol)</option>
                    <option value="math" className="text-slate-900">📐 Մաթեմատիկա</option>
                    <option value="lengua" className="text-slate-900">📖 Lengua Castellana</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-1.5 cursor-pointer font-bold select-none">
                    <input
                      type="checkbox"
                      checked={gameBlindMode}
                      onChange={e => setGameBlindMode(e.target.checked)}
                      className="rounded accent-amber-300"
                    />
                    <span>Միայն լսել (տեքստը թաքցնել)</span>
                  </label>

                  <label className="flex items-center gap-1.5 cursor-pointer font-bold select-none">
                    <input
                      type="checkbox"
                      checked={gameAutoPlay}
                      onChange={e => setGameAutoPlay(e.target.checked)}
                      className="rounded accent-amber-300"
                    />
                    <span>Ավտոմատ նվագարկել</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Score and Progress */}
            {gamePool.length > 0 && (
              <div className="mb-4 flex items-center justify-between text-xs font-bold text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <span>Հարց {gameIndex + 1} / {gamePool.length}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-emerald-600">✅ Գիտեի: {gameScore.known}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-rose-500">🔄 Կրկնել: {gameScore.review}</span>
                </div>
                <button
                  type="button"
                  onClick={() => initGame()}
                  className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
                >
                  <RotateCcw size={13} />
                  <span>Նորից խառնել</span>
                </button>
              </div>
            )}

            {/* Current Game Card */}
            {gamePool[gameIndex] && (
              <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                      {gamePool[gameIndex].category}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(gamePool[gameIndex].id)}
                      className="text-slate-400 hover:text-amber-500"
                    >
                      <Star
                        size={20}
                        className={
                          favorites.includes(gamePool[gameIndex].id)
                            ? 'fill-amber-400 text-amber-400'
                            : ''
                        }
                      />
                    </button>
                  </div>

                  {/* Audio Big Button */}
                  <div className="text-center my-6">
                    <button
                      type="button"
                      onClick={() =>
                        handleSpeak(gamePool[gameIndex].esQuestion, 'game-q')
                      }
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-red-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition flex items-center justify-center border-4 border-white"
                      title="Սեղմիր՝ իսպաներեն հարցը բարձրաձայն լսելու համար"
                    >
                      <Volume2 size={36} />
                    </button>
                    <p className="text-xs font-bold text-slate-500 mt-2">
                      Սեղմիր 🔊 կոճակը՝ հարցը լսելու համար
                    </p>
                  </div>

                  {/* Spanish Text (Revealed or hidden based on Blind Mode) */}
                  <div
                    onClick={() => toggleTranslation(gamePool[gameIndex].id)}
                    className="cursor-pointer bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center transition hover:border-amber-400"
                    title="Սեղմիր իսպաներենի վրա՝ հայերեն թարգմանությունը բացելու համար"
                  >
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      🇪🇸 Իսպաներեն հարց (Սեղմի՛ր թարգմանության համար)
                    </span>
                    {gameBlindMode && !gameRevealedHint ? (
                      <p className="text-slate-400 italic text-sm py-2">
                        «Տեքստը թաքցված է լսողական մարզման համար։ Փորձի՛ր հասկանալ ականջով։»
                        <br />
                        <span className="text-xs text-amber-600 font-semibold underline mt-1 inline-block">
                          (Սեղմիր այստեղ՝ տեքստը տեսնելու համար)
                        </span>
                      </p>
                    ) : (
                      <p className={`${fontSize === 'xl' ? 'text-3xl sm:text-4xl' : fontSize === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-black text-slate-900 leading-snug`}>
                        {gamePool[gameIndex].esQuestion}
                      </p>
                    )}
                  </div>

                  {/* Hint 1: Armenian Translation of Question */}
                  {gameRevealedHint || openedTranslations[gamePool[gameIndex].id] ? (
                    <div className="mt-4 p-5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 animate-fadeIn">
                      <span className="text-xs font-bold text-indigo-700 block mb-1">
                        🇦🇲 Հայերեն իմաստը (Օգնություն).
                      </span>
                      <p className={`${fontClasses.questionHy} font-bold text-indigo-950`}>
                        {gamePool[gameIndex].hyQuestion}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 text-center">
                      <button
                        type="button"
                        onClick={() => setGameRevealedHint(true)}
                        className="text-xs sm:text-sm font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-200 transition"
                      >
                        ❓ Դժվարանո՞ւմ ես։ Ցույց տալ հայերեն իմաստը
                      </button>
                    </div>
                  )}

                  {/* Answer Revelation */}
                  {gameRevealedAnswer ? (
                    <div className="mt-5 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 animate-fadeIn">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                          🇪🇸 Պատրաստի պատասխան (Respuesta)
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleSpeak(
                              gamePool[gameIndex].esAnswer || '',
                              'game-ans'
                            )
                          }
                          className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                          title="Լսել պատասխանը"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                      <p className={`${fontClasses.answerEs} text-slate-900`}>
                        {gamePool[gameIndex].esAnswer}
                      </p>
                      {gamePool[gameIndex].hyAnswer && (
                        <p className={`${fontClasses.answerHy} text-emerald-950 mt-2 pt-2 border-t border-emerald-200`}>
                          🇦🇲 {gamePool[gameIndex].hyAnswer}
                        </p>
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setGameRevealedAnswer(true);
                        setGameRevealedHint(true);
                        if (gamePool[gameIndex].esAnswer) {
                          handleSpeak(gamePool[gameIndex].esAnswer!, 'game-ans');
                        }
                      }}
                      className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-sm"
                    >
                      <CheckCircle2 size={18} />
                      <span>Ցույց տալ ճիշտ պատասխանը</span>
                    </button>
                  )}
                </div>

                {/* Score Action Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => nextGameCard(false)}
                    className="flex-1 py-3 px-4 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-sm transition flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw size={16} />
                    <span>Դժվարացա / Կրկնել</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => nextGameCard(true)}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Check size={18} />
                    <span>Գիտեի / Հաջորդը</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: ⚡ COACH ORDERS (Órdenes rápidas del entrenador) */}
        {/* ========================================================= */}
        {activeTab === 'coach' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-md mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚽</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black">
                    Órdenes rápidas del entrenador — Մարզչի արագ հրահանգները
                  </h2>
                  <p className="text-emerald-100 text-sm mt-1">
                    Մարզիչը տալիս է հրահանգը (El entrenador dice), իսկ ֆուտբոլիստը վայրկյանական պատասխանում է (El jugador responde)։
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COACH_ORDERS.map((order, idx) => {
                const isArmenianShown =
                  allTranslationsVisible || openedTranslations[order.id];

                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Հրահանգ #{idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleTranslation(order.id)}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
                      >
                        <Eye size={13} />
                        <span>{isArmenianShown ? 'Թաքցնել հայերենը' : 'Հայերեն թարգմ.'}</span>
                      </button>
                    </div>

                    {/* Coach Voice */}
                    <div
                      onClick={() => toggleTranslation(order.id)}
                      className="cursor-pointer bg-amber-50 hover:bg-amber-100/70 border border-amber-200 rounded-xl p-3.5 transition"
                      title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-amber-800 uppercase block">
                            👨‍🏫 El entrenador dice (Մարզիչ)
                          </span>
                          <span className={`${fontClasses.promptBig} text-slate-900`}>
                            {order.orderEs}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={e => handleSpeak(order.orderEs, `co-${order.id}-1`, e)}
                          className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-amber-500 hover:text-white border border-slate-200 shadow-sm"
                          title="Լսել մարզչի ձայնը"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                      {isArmenianShown && (
                        <p className={`${fontClasses.questionHy} text-amber-900 mt-2 pt-2 border-t border-amber-200 animate-fadeIn`}>
                          🇦🇲 {order.orderHy}
                        </p>
                      )}
                    </div>

                    {/* Player Response */}
                    <div
                      onClick={() => toggleTranslation(order.id)}
                      className="cursor-pointer bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 rounded-xl p-3.5 transition"
                      title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-emerald-800 uppercase block">
                            🏃 El jugador responde (Խաղացող)
                          </span>
                          <span className={`${fontClasses.promptBig} text-slate-900`}>
                            {order.responseEs}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={e =>
                            handleSpeak(order.responseEs, `co-${order.id}-2`, e)
                          }
                          className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-emerald-600 hover:text-white border border-slate-200 shadow-sm"
                          title="Լսել խաղացողի պատասխանը"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                      {isArmenianShown && (
                        <p className={`${fontClasses.answerHy} text-emerald-900 mt-2 pt-2 border-t border-emerald-200 animate-fadeIn`}>
                          🇦🇲 {order.responseHy}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: 🚀 QUICK RESPONSES (35 Rapid Q&A) */}
        {/* ========================================================= */}
        {activeTab === 'quick20' && (
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-md mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black">
                    Preguntas cortas para responder sin pensar — Արագ արձագանքելու խաղ
                  </h2>
                  <p className="text-blue-100 text-sm mt-1">
                    Առօրյա կարճ հարցեր և բնական պատասխաններ՝ առանց երկար մտածելու արձագանքելու համար։
                  </p>
                </div>
              </div>
            </div>

            {/* Quick 20 Table List */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider px-1">
                20 կարճ հարցուպատասխան դասի վերջի համար
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MODULE5_QUICK_20.map((item, idx) => {
                  const isArmenianShown =
                    allTranslationsVisible || openedTranslations[item.id];

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleTranslation(item.id)}
                      className="cursor-pointer bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span className="font-bold text-slate-500">#{idx + 1}</span>
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                          👆 Սեղմիր թարգմանության համար
                        </span>
                      </div>

                      {/* Question */}
                      <div className="flex items-center justify-between gap-2">
                        <p className={`${fontClasses.promptBig} text-slate-900`}>
                          {item.questionEs}
                        </p>
                        <button
                          type="button"
                          onClick={e =>
                            handleSpeak(item.questionEs, `q20-${item.id}-q`, e)
                          }
                          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>

                      {/* Answer */}
                      <div className="flex items-center justify-between gap-2 mt-2 text-emerald-700 font-bold">
                        <p className={fontClasses.answerEs}>➜ {item.answerEs}</p>
                        <button
                          type="button"
                          onClick={e =>
                            handleSpeak(item.answerEs, `q20-${item.id}-a`, e)
                          }
                          className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>

                      {/* Armenian revealed on click */}
                      {isArmenianShown && (
                        <div className={`mt-3 pt-2.5 border-t border-slate-100 text-indigo-950 font-semibold space-y-1 animate-fadeIn ${fontClasses.questionHy}`}>
                          <p>🇦🇲 Հարց՝ {item.questionHy}</p>
                          <p className="text-emerald-800">🇦🇲 Պատասխան՝ {item.answerHy}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Module 1 15 Rapid Reactions */}
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider px-1 pt-6">
                15 Արագ արձագանքի արտահայտություն (Parte 6. Responde rápido)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MODULE1_RAPID_RESPONSES.map((rr, idx) => {
                  const isArmenianShown =
                    allTranslationsVisible || openedTranslations[rr.id];

                  return (
                    <div
                      key={rr.id}
                      onClick={() => toggleTranslation(rr.id)}
                      className="cursor-pointer bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span className="font-bold text-slate-500">#{idx + 1}</span>
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                          👆 Սեղմիր թարգմանության համար
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <span className={`${fontClasses.promptBig} text-rose-700`}>
                          {rr.esQuestion}
                        </span>
                        <button
                          type="button"
                          onClick={e => handleSpeak(rr.esQuestion, `rr-${rr.id}-q`, e)}
                          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2 mt-2 text-emerald-700 font-bold">
                        <span className={fontClasses.answerEs}>➜ {rr.esAnswer}</span>
                        <button
                          type="button"
                          onClick={e => handleSpeak(rr.esAnswer, `rr-${rr.id}-a`, e)}
                          className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>

                      {isArmenianShown && (
                        <div className={`mt-3 pt-2.5 border-t border-slate-100 text-indigo-950 font-semibold space-y-1 animate-fadeIn ${fontClasses.questionHy}`}>
                          <p>🇦🇲 {rr.hyQuestion} — {rr.hyAnswer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: ⚡ BLITZ SPEED TIMER CHALLENGE */}
        {/* ========================================================= */}
        {activeTab === 'blitz' && (
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-md mb-6 text-center">
              <span className="text-3xl">⏱️</span>
              <h2 className="text-2xl font-black mt-1">Արագ արձագանքման թայմեր</h2>
              <p className="text-amber-100 text-xs sm:text-sm mt-1">
                Ունես 10 վայրկյան՝ արտահայտությունը լսելու և անմիջապես իսպաներեն արձագանքելու համար։
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 text-center space-y-6">
              {/* Progress and Timer */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Քարտ {blitzIdx + 1} / {blitzItems.length}</span>
                <span className="text-amber-600">{blitzItems[blitzIdx]?.type}</span>
              </div>

              {/* Countdown Wheel */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <div
                  className={`w-full h-full rounded-full border-8 flex items-center justify-center transition-colors duration-500 ${
                    blitzTimer <= 3
                      ? 'border-rose-500 text-rose-600 animate-pulse'
                      : 'border-amber-400 text-slate-900'
                  }`}
                >
                  <span className="text-4xl font-black">{blitzTimer}</span>
                </div>
              </div>

              {/* Phrase Card */}
              {blitzItems[blitzIdx] && (
                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <p className="text-xs font-bold text-slate-500 mb-1">
                      ԼՍԻ՛Ր ՀՐԱՀԱՆԳԸ ԿԱՄ ՀԱՐՑԸ
                    </p>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900">
                      {blitzItems[blitzIdx].esQ}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        handleSpeak(blitzItems[blitzIdx].esQ, 'blitz-play')
                      }
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition shadow-sm"
                    >
                      <Volume2 size={15} />
                      <span>Կրկին լսել</span>
                    </button>
                  </div>

                  {/* Armenian translation of prompt */}
                  <div
                    onClick={() =>
                      toggleTranslation(`blitz-${blitzItems[blitzIdx].id}`)
                    }
                    className="cursor-pointer text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 p-2.5 rounded-xl border border-indigo-200 transition"
                  >
                    <span>
                      {openedTranslations[`blitz-${blitzItems[blitzIdx].id}`]
                        ? `🇦🇲 Հայերեն՝ ${blitzItems[blitzIdx].hyQ}`
                        : '👆 Սեղմիր՝ հայերեն իմաստը տեսնելու համար'}
                    </span>
                  </div>

                  {/* Answer Revelation */}
                  {blitzShowAnswer ? (
                    <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5 animate-fadeIn">
                      <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">
                        ✅ Պատասխան (Respuesta)
                      </span>
                      <p className="text-2xl font-black text-slate-900">
                        {blitzItems[blitzIdx].esA}
                      </p>
                      <p className="text-sm font-semibold text-emerald-950 mt-1">
                        🇦🇲 {blitzItems[blitzIdx].hyA}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          handleSpeak(blitzItems[blitzIdx].esA, 'blitz-ans-play')
                        }
                        className="mt-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center justify-center gap-1 mx-auto"
                      >
                        <Volume2 size={14} />
                        <span>Լսել պատասխանի ձայնը</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setBlitzShowAnswer(true)}
                      className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition"
                    >
                      Ցույց տալ պատասխանը
                    </button>
                  )}
                </div>
              )}

              {/* Control buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => startBlitz(blitzIdx)}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-sm transition"
                >
                  Կրկնել այս հարցը
                </button>
                <button
                  type="button"
                  onClick={nextBlitz}
                  className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-sm transition shadow-md"
                >
                  Հաջորդ հարցը ➜
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: 💬 DIALOGUES (Երկխոսություններ) */}
        {/* ========================================================= */}
        {activeTab === 'dialogues' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💬</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black">
                    Mini diálogos — Կարճ իրական երկխոսություններ
                  </h2>
                  <p className="text-purple-100 text-sm mt-1">
                    Սեղմի՛ր յուրաքանչյուր նախադասության վրա՝ հայերեն թարգմանությունը բացելու համար։
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {DIALOGUES.map(dialogue => (
                <div
                  key={dialogue.id}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 overflow-hidden"
                >
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-lg font-black text-slate-900">
                      {dialogue.titleEs}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500">
                      {dialogue.titleHy}
                    </p>
                  </div>

                  {/* Lines */}
                  <div className="space-y-3">
                    {dialogue.lines.map((line, idx) => {
                      const lineId = `${dialogue.id}-${idx}`;
                      const isLineOpen =
                        allTranslationsVisible || openedTranslations[lineId];
                      const isProf =
                        line.speakerEs.includes('Profesor') ||
                        line.speakerEs.includes('Entrenador');

                      return (
                        <div
                          key={lineId}
                          onClick={() => toggleTranslation(lineId)}
                          className={`cursor-pointer rounded-2xl p-3.5 border transition ${
                            isProf
                              ? 'bg-amber-50/70 border-amber-200 hover:bg-amber-100/70'
                              : 'bg-indigo-50/60 border-indigo-200 hover:bg-indigo-100/60'
                          }`}
                          title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[11px] font-black uppercase px-2 py-0.5 rounded ${
                                    isProf
                                      ? 'bg-amber-200 text-amber-900'
                                      : 'bg-indigo-200 text-indigo-900'
                                  }`}
                                >
                                  {line.speakerEs} ({line.speakerHy})
                                </span>
                                <span className="text-[10px] text-slate-400">
                                  👆 Սեղմիր թարգմանության համար
                                </span>
                              </div>
                              <p className={`${fontClasses.dialogueEs} text-slate-900 mt-1`}>
                                {line.textEs}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={e =>
                                handleSpeak(line.textEs, lineId, e)
                              }
                              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-amber-500 hover:text-white transition shadow-sm"
                              title="Լսել արտասանությունը"
                            >
                              <Volume2 size={18} />
                            </button>
                          </div>

                          {/* Armenian line translation */}
                          {isLineOpen && (
                            <div className={`mt-2 pt-2 border-t border-slate-200/80 ${fontClasses.dialogueHy} text-slate-800 animate-fadeIn`}>
                              🇦🇲 {line.textHy}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 7: 📖 READING COMPREHENSION (Daniel Story) */}
        {/* ========================================================= */}
        {activeTab === 'reading' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📖</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black">
                    {READING_COMPREHENSION.titleEs}
                  </h2>
                  <p className="text-teal-100 text-sm mt-1">
                    {READING_COMPREHENSION.titleHy}
                  </p>
                </div>
              </div>
            </div>

            {/* Story Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Իսպաներեն տեքստ
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleSpeak(READING_COMPREHENSION.textEs, 'reading-full')
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-600 transition"
                  >
                    <Volume2 size={15} />
                    <span>Լսել ամբողջ տեքստը</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      toggleTranslation('story-armenian-full')
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold hover:bg-indigo-100 transition"
                  >
                    <Eye size={15} />
                    <span>
                      {openedTranslations['story-armenian-full']
                        ? 'Թաքցնել հայերենը'
                        : 'Հայերեն թարգմանություն'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Spanish Story */}
              <div
                onClick={() => toggleTranslation('story-armenian-full')}
                className={`cursor-pointer text-slate-800 ${fontClasses.readingText} space-y-3 bg-amber-50/40 p-6 rounded-2xl border border-amber-200 hover:border-amber-400 transition`}
                title="Սեղմիր՝ ամբողջ տեքստի հայերեն թարգմանությունը տեսնելու համար"
              >
                <p>
                  El martes, Daniel llegó al instituto un poco nervioso porque tenía un examen de Matemáticas. Durante la primera clase, su profesor explicó cómo resolver ecuaciones sencillas. Daniel prestó atención y consiguió resolver casi todos los ejercicios.
                </p>
                <p>
                  Después del recreo, en la clase de Lengua, los alumnos leyeron una historia sobre la amistad. La profesora les pidió que identificaran al protagonista y explicaran la idea principal del texto.
                </p>
                <p>
                  Por la tarde, Daniel fue a entrenar con su equipo de fútbol. Aunque estaba cansado, disfrutó mucho del entrenamiento. Al volver a casa, terminó sus deberes y se sintió satisfecho por todo lo que había aprendido.
                </p>
              </div>

              {/* Armenian Story Revealed */}
              {(allTranslationsVisible ||
                openedTranslations['story-armenian-full']) && (
                <div className={`mt-4 p-6 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 ${fontClasses.readingText} space-y-3 animate-fadeIn`}>
                  <span className="text-xs font-bold text-indigo-700 block mb-1">
                    🇦🇲 Տեքստի հայերեն թարգմանությունը՝
                  </span>
                  <p>
                    Երեքշաբթի օրը Դանիելը դպրոց (ինստիտուտ) եկավ մի փոքր անհանգիստ, որովհետև մաթեմատիկայի քննություն ուներ։ Առաջին դասի ժամանակ նրա ուսուցիչը բացատրեց, թե ինչպես լուծել պարզ հավասարումներ։ Դանիելը ուշադիր էր և կարողացավ լուծել գրեթե բոլոր վարժությունները։
                  </p>
                  <p>
                    Ընդմիջումից հետո, իսպաներենի (Lengua) դասին աշակերտները կարդացին մի պատմություն ընկերության մասին։ Ուսուցչուհին նրանց խնդրեց գտնել գլխավոր հերոսին և բացատրել տեքստի գլխավոր գաղափարը։
                  </p>
                  <p>
                    Երեկոյան Դանիելը գնաց մարզման իր ֆուտբոլի թիմի հետ։ Չնայած հոգնած էր, բայց շատ վայելեց մարզումը։ Տուն վերադառնալուն պես նա ավարտեց տնային աշխատանքները և իրեն գոհ զգաց այն ամենից, ինչ սովորել էր։
                  </p>
                </div>
              )}
            </div>

            {/* Comprehension Questions */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 px-1">
                Հարցեր տեքստի վերաբերյալ (Preguntas de comprensión)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {READING_COMPREHENSION.questions.map(q => {
                  const qId = `read-q-${q.number}`;
                  const isQOpen =
                    allTranslationsVisible || openedTranslations[qId];
                  const isAnsOpen = openedAnswers[qId];

                  return (
                    <div
                      key={qId}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-bold text-slate-600">Հարց #{q.number}</span>
                        <button
                          type="button"
                          onClick={() => toggleTranslation(qId)}
                          className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
                        >
                          <Eye size={13} />
                          <span>{isQOpen ? 'Փակել' : 'Հայերեն'}</span>
                        </button>
                      </div>

                      {/* Question in Spanish */}
                      <div
                        onClick={() => toggleTranslation(qId)}
                        className="cursor-pointer bg-amber-50 hover:bg-amber-100/70 border border-amber-200 rounded-xl p-3.5 transition"
                        title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className={`${fontClasses.questionEs} text-slate-900`}>
                            {q.questionEs}
                          </p>
                          <button
                            type="button"
                            onClick={e =>
                              handleSpeak(q.questionEs, `${qId}-q`, e)
                            }
                            className="p-2 rounded-lg bg-white text-slate-700 hover:bg-amber-500 hover:text-white border border-slate-200"
                          >
                            <Volume2 size={18} />
                          </button>
                        </div>
                        {isQOpen && (
                          <p className={`${fontClasses.questionHy} text-amber-900 mt-2 pt-2 border-t border-amber-200`}>
                            🇦🇲 {q.questionHy}
                          </p>
                        )}
                      </div>

                      {/* Answer */}
                      {isAnsOpen ? (
                        <div
                          onClick={() => toggleTranslation(`${qId}-ans`)}
                          className="cursor-pointer bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 transition animate-fadeIn"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold text-emerald-800 uppercase block">
                                🇪🇸 Respuesta
                              </span>
                              <p className={`${fontClasses.answerEs} text-slate-900`}>
                                {q.answerEs}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={e =>
                                handleSpeak(q.answerEs, `${qId}-ans`, e)
                              }
                              className="p-2 rounded-lg bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200"
                            >
                              <Volume2 size={18} />
                            </button>
                          </div>
                          {(isQOpen ||
                            openedTranslations[`${qId}-ans`]) && (
                            <p className={`${fontClasses.answerHy} text-emerald-950 mt-2 pt-2 border-t border-emerald-200`}>
                              🇦🇲 {q.answerHy}
                            </p>
                          )}
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleAnswer(qId)}
                          className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs sm:text-sm transition"
                        >
                          Ցույց տալ պատասխանը
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 8: 👨‍🏫 TEACHER & METHODOLOGY GUIDE (Ուսուցչի համար) */}
        {/* ========================================================= */}
        {activeTab === 'guide' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👨‍🏫</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black">
                    Ուսուցչի ուղեցույց (Guía para el profesor)
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Español + Հայերեն | 1.º de ESO (7-րդ դասարան) | Nivel A1–B1
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-sm leading-relaxed border-t border-white/10 pt-4">
                <p>
                  Այս նյութը նախատեսված է <strong>Իսպանիայում սովորող 7-րդ դասարանի (1.º de ESO)</strong> աշակերտի համար։ Հարցերը նման են այն հարցերին, որոնք նրան կարող են տալ դասընկերները, ուսուցիչները, ընկերները և ֆուտբոլի մարզիչը։
                </p>

                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <h3 className="font-bold text-amber-300 text-base mb-2">
                    Ինչպես անցկացնել «Լովի նա սլուխ» խաղը.
                  </h3>
                  <ol className="list-decimal list-inside space-y-1.5 text-slate-100 font-medium">
                    <li>Սկզբում բարձրաձայն կարդացեք կամ նվագարկեք միայն իսպաներեն հարցը։</li>
                    <li>Աշակերտը պետք է անմիջապես պատասխանի իսպաներեն։</li>
                    <li>Եթե դժվարանում է, ցույց տվեք հայերեն իմաստը, ապա պատրաստի պատասխանը։</li>
                  </ol>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <h3 className="font-bold text-amber-300 text-base mb-2">
                    Մեթոդական 3 փուլերը.
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Փուլ 1.</strong> Կարդալ հարցերն ու պատասխանները միասին (իսպաներեն + հայերեն)՝ իմաստը և արտասանությունը յուրացնելու համար։
                    </p>
                    <p>
                      <strong>Փուլ 2.</strong> Տալ միայն իսպաներեն հարցերը («Լովի նա սլուխ»), որպեսզի աշակերտը ընկալի արագ խոսքը։
                    </p>
                    <p>
                      <strong>Փուլ 3.</strong> Աշակերտից պահանջել ոչ թե կրկնել պատրաստի պատասխանը, այլ պատասխանել իր սեփական բառերով։
                    </p>
                  </div>
                </div>

                <div className="bg-amber-400/20 rounded-2xl p-4 border border-amber-400/30 text-amber-100">
                  <strong>💡 Կարևոր խորհուրդ.</strong> Հատկապես օգտակար է հերթափոխել առօրյա, ֆուտբոլային, մաթեմատիկական և Lengua-ի հարցերը, որպեսզի երեխան սովորի արագ անցնել մի թեմայից մյուսին։
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 9: ⭐ FAVORITES */}
        {/* ========================================================= */}
        {activeTab === 'favorites' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Պահպանված հարցեր ({favorites.length})
                </h2>
                <p className="text-xs text-slate-500">
                  Այն արտահայտությունները, որոնց վրա ավելացրել եք աստղանիշ ⭐
                </p>
              </div>

              {favorites.length > 0 && (
                <button
                  type="button"
                  onClick={() => setFavorites([])}
                  className="text-xs text-rose-600 hover:text-rose-800 font-bold"
                >
                  Մաքրել բոլորը
                </button>
              )}
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <Star size={40} className="mx-auto text-slate-300 mb-3" />
                <h3 className="text-base font-bold text-slate-700">
                  Դեռ պահպանված հարցեր չկան
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Սեղմեք ցանկացած քարտի վրայի աստղանիշին ⭐՝ այստեղ ավելացնելու համար։
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
                >
                  Անցնել բոլոր հարցերին
                </button>
              </div>
            ) : null}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 mt-12 text-center text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            ¡Escucha y responde rápido! — Լսի՛ր և արագ պատասխանի՛ր | Español + Հայերեն (1.º ESO)
          </p>
          <p className="text-slate-500">
            Ամբողջական նյութ՝ դպրոցական, ֆուտբոլային, մաթեմատիկական և քերականական հարցերով
          </p>
        </div>
      </footer>

      {/* Reset Toast Feedback */}
      {resetToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 text-sm font-bold animate-fadeIn">
          <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
          <span>Բոլոր թարգմանությունները և պատասխանները զրոյացվեցին (Сброшено)</span>
        </div>
      )}
    </div>
  );
}
