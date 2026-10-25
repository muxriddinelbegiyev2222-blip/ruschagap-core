// ==========================================
// Ruschagap: Curriculum Data Types
// Bu fayl 90 kunlik darslikning bazaviy qoliplari.
// Barcha darslar, testlar va suhbatlar shu qolipda yoziladi.
// ==========================================

export type Level = "A0" | "A1" | "A2" | "B1";

// 1. Mashq turlari (O'yinlashtirilgan ta'lim uchun)
export type ExerciseType =
  | "multiple_choice" // 4 variantli test
  | "fill_in_the_blank" // Bo'sh joyni to'ldirish
  | "word_order" // So'zlarni to'g'ri tartibda joylash (Lego usuli)
  | "match_pairs" // Juftlikni topish (so'z va tarjima)
  | "speak" // Ovoz chiqarib aytish (AI tekshiradi)
  | "listen" // Eshitib tushunish
  | "translate_uz_to_ru" // O'zbekchadan ruschaga tarjima
  | "translate_ru_to_uz"; // Ruschadan o'zbekchaga tarjima

// 2. Lug'at boyligi (Yangi so'zlar)
export interface VocabularyItem {
  id: string;
  ru: string; // Ruscha so'z
  uz: string; // O'zbekcha tarjimasi
  transcription: string; // Talaffuzi (masalan: [privet])
  audio_url?: string; // Ovoz fayli (keyinchalik AI yaratadi)
}

// 3. Grammatik qoliplar (Lego usuli - quruq qoida emas, tayyor gap qolipi)
export interface GrammarPattern {
  id: string;
  pattern_ru: string; // Masalan: "У меня есть [nimadir]"
  pattern_uz: string; // Masalan: "Menda [nimadir] bor"
  explanation: string; // Qisqa va sodda tushuntirish (maktab grammatikasi emas)
  examples: {
    ru: string;
    uz: string;
  }[];
}

// 4. Mashq (Test/Savol) tuzilishi
export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string; // Savol matni
  options?: string[]; // Variantlar (agar test bo'lsa)
  correct_answer: string | string[]; // To'g'ri javob
  hint?: string; // Yordamchi maslahat
  points: number; // Beriladigan XP ballari
}

// 5. Hikoya (Serial effekti - Story-driven learning)
export interface StoryScene {
  id: string;
  character: string; // Qahramon (masalan: Jasur)
  location: string; // Joylashuv (masalan: Aeroport)
  dialogue: {
    speaker: string;
    ru: string;
    uz: string;
    audio_url?: string;
  }[];
}

// 6. Dars (Bitta kunlik dars)
export interface Lesson {
  day: number; // 1 dan 90 gacha
  title: string; // Dars nomi
  goal: string; // Maqsad
  level: Level;
  duration_minutes: number; // 15-20 daqiqa (cheklovga mos)
  vocabulary: VocabularyItem[]; // Yangi so'zlar
  grammar_patterns: GrammarPattern[]; // Gap qoliplari
  story: StoryScene; // Kunlik syujet
  exercises: Exercise[]; // Mashqlar
  unlock_condition: {
    min_accuracy: number; // 80% (cheklovga mos)
    min_spoken_sentences: number; // 5 ta gap aytish sharti
  };
}

// 7. Modul (Haftalik blok)
export interface Module {
  id: number; // 1-modul, 2-modul...
  title: string; // Modul nomi
  description: string; // Modul tavsifi
  weeks: number; // Necha haftalik
  lessons: Lesson[]; // Ichidagi darslar
}

// 8. Butun Kurs (90 kunlik xarita)
export interface Course {
  id: string;
  title: string;
  description: string;
  total_days: number;
  modules: Module[];
}
