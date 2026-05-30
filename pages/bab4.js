window.appPages = window.appPages || {};
window.appPages['bab4'] = `
<div class="space-y-6 fade-in pb-12">
    <div class="border-b border-slate-200 pb-4 slide-up">
        <span class="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Bab 4</span>
        <h2 class="text-3xl font-extrabold text-slate-800 mt-3">Kereaktifan Logam</h2>
        <p class="text-sm text-slate-600 mt-2">Kepelbagaian mineral bumi, siri kereaktifan logam, dan proses pengekstrakan logam daripada bijihnya.</p>
    </div>

    <!-- 4.1 Mineral -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-sm slide-up" style="animation-delay: 0.1s;">
        <strong class="text-orange-700 text-lg block mb-3 border-b pb-1">4.1 Kepelbagaian Mineral Bumi</strong>
        <p class="text-xs text-slate-700 mb-4">Mineral wujud sebagai unsur (Emas, Perak) atau sebatian (bergabung dengan oksigen atau sulfur).</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-slate-50 p-3 border border-slate-200 rounded">
                <img src="./images/Contoh2%20Unsur.png" alt="Contoh Unsur" class="w-full object-contain bg-white p-1 rounded border border-slate-100 mb-2">
            </div>
            <div class="bg-slate-50 p-3 border border-slate-200 rounded">
                <img src="./images/Contoh2%20Sebatian.png" alt="Contoh Sebatian" class="w-full object-contain bg-white p-1 rounded border border-slate-100 mb-2">
            </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-center mb-4">
            <div class="bg-slate-50 p-2 border border-slate-200 rounded font-bold text-slate-700">Hematit <br><span class="text-[10px] font-normal">Besi + Oksigen</span></div>
            <div class="bg-slate-50 p-2 border border-slate-200 rounded font-bold text-slate-700">Bauksit <br><span class="text-[10px] font-normal">Aluminium + Oksigen</span></div>
            <div class="bg-slate-50 p-2 border border-slate-200 rounded font-bold text-slate-700">Kasiterit <br><span class="text-[10px] font-normal">Timah + Oksigen</span></div>
            <div class="bg-slate-50 p-2 border border-slate-200 rounded font-bold text-slate-700">Galena <br><span class="text-[10px] font-normal">Plumbum + Sulfur</span></div>
        </div>
    </div>

    <!-- 4.2 Siri -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.2s;">
        <h3 class="text-xl font-bold text-orange-700 mb-4 border-b pb-2">4.2 Siri Kereaktifan Logam</h3>
        <p class="text-xs text-slate-600 mb-4">Susunan logam mengikut kereaktifannya bertindak balas dengan Oksigen.</p>
        <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/2 flex items-center justify-center bg-slate-50 p-2 rounded-xl border border-slate-200">
                <img src="./images/Siri%20Kereaktifan%20Logam.png" alt="Siri Kereaktifan Logam" class="max-h-[300px] w-auto object-contain rounded">
            </div>
            <div class="w-full md:w-1/2 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs text-slate-700 flex flex-col justify-center">
                <strong class="block mb-2 text-slate-800 border-b border-slate-300 pb-1">Panduan Mengekstrak:</strong>
                <ul class="list-disc pl-4 space-y-2">
                    <li>Logam <strong>di atas Karbon</strong> (K, Na, Ca, Mg, Al) diekstrak melalui proses elektrolisis.</li>
                    <li>Logam <strong>di bawah Karbon</strong> (Zn, Fe, Sn, Pb) diekstrak melalui penurunan menggunakan karbon dalam relau bagas.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 4.3 Pengekstrakan -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-sm slide-up" style="animation-delay: 0.3s;">
        <strong class="text-orange-700 text-lg block mb-3 border-b pb-1">4.3 Pengekstrakan (Relau Bagas)</strong>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="w-full md:w-1/2 text-xs space-y-2 text-slate-700">
                <p><strong>Bahan Dimasukkan:</strong> Bijih besi (hematit), Arang kok (karbon), Batu kapur dipanaskan dengan udara panas.</p>
                <p><strong>Proses Penurunan:</strong> Arang kok bentuk Karbon Monoksida (CO). CO menyingkirkan oksigen dari bijih untuk menghasilkan leburan besi tulen.</p>
                <p><strong>Pembentukan Sanga (Slag):</strong> Batu kapur terurai bentuk kalsium oksida, kemudian bertindak balas dengan bendasing (pasir/silikon dioksida) membentuk sanga yang terapung di atas besi lebur.</p>
            </div>
            <div class="w-full md:w-1/2 bg-orange-50 rounded-xl p-4 border border-orange-200 flex flex-col items-center justify-center text-center">
                <i class="fa-solid fa-fire-burner text-4xl text-orange-600 mb-2"></i>
                <strong class="text-orange-800 block text-sm">Relau Bagas</strong>
                <p class="text-xs text-orange-700 mt-1">Mengekstrak besi secara komersial dari bijihnya pada suhu sangat tinggi.</p>
            </div>
        </div>
    </div>
</div>
`;
