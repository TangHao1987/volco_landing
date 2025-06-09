export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.brand': 'Volco',
    'nav.why_volco': 'Why Volco?',
    'nav.how_it_works': 'How It Works',
    'nav.features': 'Features',
    'nav.progress': 'Progress',
    'nav.download': 'Download',

    // Hero Section
    'hero.title': 'Master Vocabulary for Life with Volco.',
    'hero.description': 'The intelligent app that uses science to build your long-term memory for words.',
    'hero.app_store_alt': 'Download on the App Store',
    'hero.google_play_alt': 'Get on Google Play',

    // Forgetting Curve Section
    'forgetting_curve.title': 'Why We Forget: The Science of the Forgetting Curve',
    'forgetting_curve.description': 'Ever wondered why newly learned information fades so quickly? The Ebbinghaus forgetting curve illustrates how memory retention declines over time unless we actively reinforce it. Volco is designed to combat this natural process.',
    'forgetting_curve.image_alt': 'Ebbinghaus Forgetting Curve',

    // Problem Statement
    'problem.title': 'Tired of Forgetting New Words?',
    'problem.description': 'Traditional learning methods often lead to quick forgetting. Volco is engineered to change that, using a smarter approach to help you truly master vocabulary.',

    // Features Section
    'features.main_title': 'Powered by Science: Your Words, Intelligently Managed.',
    'features.main_description': 'Volco\'s intelligent Spaced Repetition System (SRS) automatically manages word status, moving them between "To Study," "Learning," and "Known" buckets. It schedules reviews at optimal times to ensure words stick in your long-term memory.',
    
    'features.status_to_study': 'To Study Status',
    'features.status_to_study_desc': 'These are new words or words that are due for review. Volco identifies them as ready for your attention, based on your learning progress and the optimal review schedule.',
    
    'features.status_learning': 'Learning Status',
    'features.status_learning_desc': 'Words in this status are actively being learned. They require more frequent review to solidify your memory. Volco will bring them back at increasing intervals until mastered.',
    
    'features.status_known': 'Known Status',
    'features.status_known_desc': 'Congratulations! These are words you\'ve successfully mastered and have a strong, long-term memory of. Volco will review them much less frequently to ensure retention.',

    'features.word_discovery_title': 'Dive into 29,000+ Words, Ready to Learn.',
    'features.word_discovery_desc': 'No need to create flashcards! Explore curated "Word Books" by category (like BEC, GMAT, TOEFL) or study words ranked by frequency. Finding and adding words is effortless.',

    'features.engaging_quizzes_title': 'Engaging Quizzes Tailored to Your Learning Style.',
    'features.engaging_quizzes_desc': 'Make learning fun and effective with multiple quiz formats like multiple-choice, typing challenges, and word block puzzles, all designed to reinforce your understanding.',

    'features.offline_learning_title': 'Learn Anywhere, Anytime – Your Progress is Always Safe.',
    'features.offline_learning_desc': 'Volco works seamlessly without an internet connection, perfect for commutes or travel. Plus, your vocabulary and progress are securely backed up to the cloud.',

    'features.statistics_title': 'See Your Vocabulary Grow with Clear Statistics.',
    'features.statistics_desc': 'Volco provides insights on total study time, words mastered, study sessions, and learning streaks, helping you stay motivated and understand your learning journey.',

    // Final CTA
    'final_cta.title': 'Start Your Journey to Vocabulary Mastery Today.',
    'final_cta.description': 'Join thousands of learners who are already building their vocabulary for life with Volco\'s intelligent and effective system.',

    // Footer
    'footer.copyright': 'Volco. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',

    // Image Alt Tags
    'image.volco_main_lists': 'Volco Main Lists Tab',
    'image.volco_search': 'Volco Search Results',
    'image.volco_stats': 'Volco Stats Page',
  },
  zh: {
    // Navigation
    'nav.brand': 'Volco',
    'nav.why_volco': '为什么选择 Volco？',
    'nav.how_it_works': '工作原理',
    'nav.features': '功能特色',
    'nav.progress': '学习进度',
    'nav.download': '下载',

    // Hero Section
    'hero.title': '与 Volco 一起终身掌握词汇。',
    'hero.description': '这款智能应用运用科学方法，帮助您建立对单词的长期记忆。',
    'hero.app_store_alt': '在 App Store 下载',
    'hero.google_play_alt': '在 Google Play 获取',

    // Forgetting Curve Section
    'forgetting_curve.title': '为什么我们会遗忘：遗忘曲线的科学',
    'forgetting_curve.description': '您是否想过为什么新学到的信息会如此快速地消失？艾宾浩斯遗忘曲线显示了记忆保持如何随时间递减，除非我们主动加强它。Volco 专为对抗这一自然过程而设计。',
    'forgetting_curve.image_alt': '艾宾浩斯遗忘曲线',

    // Problem Statement
    'problem.title': '厌倦了忘记新单词吗？',
    'problem.description': '传统的学习方法往往导致快速遗忘。Volco 旨在改变这一点，使用更智能的方法帮助您真正掌握词汇。',

    // Features Section
    'features.main_title': '科学驱动：智能管理您的单词。',
    'features.main_description': 'Volco 的智能间隔重复系统 (SRS) 自动管理单词状态，在"待学习"、"学习中"和"已掌握"之间移动。它在最佳时间安排复习，确保单词牢固地存储在您的长期记忆中。',
    
    'features.status_to_study': '待学习状态',
    'features.status_to_study_desc': '这些是新单词或到期需要复习的单词。Volco 根据您的学习进度和最佳复习计划，识别它们需要您的关注。',
    
    'features.status_learning': '学习中状态',
    'features.status_learning_desc': '此状态下的单词正在积极学习中。它们需要更频繁的复习来巩固您的记忆。Volco 会以逐渐增加的间隔重新呈现，直到掌握。',
    
    'features.status_known': '已掌握状态',
    'features.status_known_desc': '恭喜！这些是您已成功掌握并拥有强烈长期记忆的单词。Volco 会更少频率地复习它们以确保保持。',

    'features.word_discovery_title': '深入探索 29,000+ 个单词，随时学习。',
    'features.word_discovery_desc': '无需制作抽认卡！按类别探索精选的"单词书"（如 BEC、GMAT、TOEFL）或学习按频率排名的单词。查找和添加单词毫不费力。',

    'features.engaging_quizzes_title': '根据您的学习风格定制的引人入胜的测验。',
    'features.engaging_quizzes_desc': '通过多种测验格式让学习变得有趣有效，如选择题、打字挑战和单词拼图，所有这些都旨在加强您的理解。',

    'features.offline_learning_title': '随时随地学习——您的进度始终安全。',
    'features.offline_learning_desc': 'Volco 在没有互联网连接的情况下无缝工作，非常适合通勤或旅行。此外，您的词汇和进度会安全地备份到云端。',

    'features.statistics_title': '通过清晰的统计数据看到您的词汇增长。',
    'features.statistics_desc': 'Volco 提供有关总学习时间、掌握的单词、学习会话和学习连胜的见解，帮助您保持动力并了解您的学习历程。',

    // Final CTA
    'final_cta.title': '今天开始您的词汇掌握之旅。',
    'final_cta.description': '加入已经在使用 Volco 智能有效系统终身建立词汇的数千名学习者。',

    // Footer
    'footer.copyright': 'Volco. 保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.terms': '使用条款',

    // Image Alt Tags
    'image.volco_main_lists': 'Volco 主列表标签',
    'image.volco_search': 'Volco 搜索结果',
    'image.volco_stats': 'Volco 统计页面',
  },
} as const; 