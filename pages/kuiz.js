window.appPages = window.appPages || {};
window.appPages['kuiz'] = `
<div class="space-y-8 pb-12">
    <!-- Header -->
    <div class="border-b border-slate-200 dark:border-slate-700 pb-4 slide-up">
        <span class="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Penilaian</span>
        <h2 class="text-3xl font-extrabold text-slate-800 dark:text-white mt-4">Cabaran Minda</h2>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">Uji kefahaman anda dan kumpulkan XP untuk menaik taraf level!</p>
    </div>

    <!-- Intro Card -->
    <div class="glass-panel p-8 rounded-2xl shadow-sm text-center slide-up" style="animation-delay: 0.1s;">
        <div class="w-20 h-20 mx-auto bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-6">
            <i class="fa-solid fa-gamepad text-4xl text-purple-500"></i>
        </div>
        <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">Sedia untuk bermula?</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">Jawab soalan-soalan berikut. Setiap jawapan yang betul akan memberikan anda XP.</p>
        
        <button onclick="document.getElementById('kuiz-area').classList.remove('hidden'); this.style.display='none';" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-transform hover:scale-105">
            Mula Kuiz
        </button>
    </div>

    <!-- Quiz Area -->
    <div id="kuiz-area" class="hidden space-y-6 slide-up" style="animation-delay: 0.2s;">
        <!-- Soalan 1 -->
        <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-bold text-slate-400 uppercase">Soalan 1</span>
                <span class="text-xs font-bold text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">+20 XP</span>
            </div>
            <h4 class="text-lg font-bold text-slate-800 dark:text-white mb-4">Bahagian mata manakah yang berfungsi mengawal kuantiti cahaya yang masuk ke dalam mata?</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onclick="handleAnswer(this, false)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">A. Kornea</button>
                <button onclick="handleAnswer(this, true, 20)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">B. Iris</button>
                <button onclick="handleAnswer(this, false)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">C. Retina</button>
                <button onclick="handleAnswer(this, false)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">D. Kanta mata</button>
            </div>
        </div>

        <!-- Soalan 2 -->
        <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-bold text-slate-400 uppercase">Soalan 2</span>
                <span class="text-xs font-bold text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">+30 XP</span>
            </div>
            <h4 class="text-lg font-bold text-slate-800 dark:text-white mb-4">Proses apakah yang digunakan untuk mengekstrak logam seperti besi di dalam relau bagas?</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onclick="handleAnswer(this, false)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">A. Pengoksidaan</button>
                <button onclick="handleAnswer(this, false)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">B. Elektrolisis</button>
                <button onclick="handleAnswer(this, false)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">C. Pemejalwapan</button>
                <button onclick="handleAnswer(this, true, 30)" class="text-left px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-colors">D. Penurunan oleh Karbon</button>
            </div>
        </div>
    </div>
</div>

<script>
    // Inline script specific to the quiz logic
    function handleAnswer(button, isCorrect, xpAmount) {
        // Prevent multiple clicks on the same question
        const container = button.parentElement;
        const buttons = container.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            button.classList.remove('border-slate-200', 'dark:border-slate-600', 'hover:bg-slate-50', 'dark:hover:bg-slate-700');
            button.classList.add('bg-emerald-500', 'text-white', 'border-emerald-500');
            button.innerHTML += ' <i class="fa-solid fa-check float-right mt-1"></i>';
            
            // Call gamification system to add XP
            if (window.gamification) {
                window.gamification.addXP(xpAmount, "Jawapan Tepat");
            }
        } else {
            button.classList.remove('border-slate-200', 'dark:border-slate-600', 'hover:bg-slate-50', 'dark:hover:bg-slate-700');
            button.classList.add('bg-rose-500', 'text-white', 'border-rose-500');
            button.innerHTML += ' <i class="fa-solid fa-xmark float-right mt-1"></i>';
            
            // Highlight correct answer
            buttons.forEach(btn => {
                if (btn.getAttribute('onclick').includes('true')) {
                    btn.classList.add('border-emerald-500', 'text-emerald-600', 'dark:text-emerald-400');
                }
            });
        }
    }
</script>
`;
