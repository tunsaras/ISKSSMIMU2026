window.appPages = window.appPages || {};
window.appPages['bab3'] = `
<div class="space-y-6 fade-in pb-12">
    <div class="border-b border-slate-200 pb-4 slide-up">
        <span class="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Bab 3</span>
        <h2 class="text-3xl font-extrabold text-slate-800 mt-3">Pengangkutan</h2>
        <p class="text-sm text-slate-600 mt-2">Sistem pengangkutan dalam organisma kompleks termasuk struktur jantung manusia dan pengangkutan dalam tumbuhan.</p>
    </div>

    <!-- 3.1 & 3.5 -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-sm slide-up" style="animation-delay: 0.1s;">
        <strong class="text-rose-700 text-lg block mb-2">3.1 Keperluan Sistem & 3.5 Haiwan vs Tumbuhan</strong>
        <p class="mb-4 text-slate-700">Organisma kompleks perlukan sistem khas kerana nisbah JLP/I kecil. Resapan terlalu lambat untuk sedia O2 & buang toksin (urea/CO2).</p>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <strong>Perbandingan:</strong> Haiwan ada pam (jantung), injap, dan salur bersambung. Tumbuhan guna tarikan transpirasi/kapilari melalui salur berasingan (xilem/floem) tanpa injap.
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-slate-50 border border-slate-200 rounded p-2 text-center text-xs">
                <img src="./images/Sistem%20Peredaran%20Darah%20Ikan.png" class="h-24 w-auto object-contain mx-auto mb-2">
                <strong>Ikan</strong> (Tunggal, 2 ruang)
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded p-2 text-center text-xs">
                <img src="./images/Sistem%20Peredaran%20Darah%20Amfibia.png" class="h-24 w-auto object-contain mx-auto mb-2">
                <strong>Amfibia</strong> (Ganda dua tak lengkap)
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded p-2 text-center text-xs">
                <img src="./images/Sistem%20Peredaran%20Darah%20Manusia.png" class="h-24 w-auto object-contain mx-auto mb-2">
                <strong>Manusia</strong> (Ganda dua lengkap)
            </div>
        </div>
    </div>

    <!-- 3.2 Jantung -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.2s;">
        <h3 class="text-xl font-bold text-rose-700 mb-4 border-b pb-2">3.2 Jantung & Salur Darah</h3>
        <div class="flex flex-col md:flex-row gap-6 mb-6">
            <div class="w-full md:w-1/2 bg-slate-900 p-5 rounded-xl border border-slate-800 text-center">
                <strong class="text-white block mb-4 text-sm uppercase tracking-widest">Jantung Manusia</strong>
                <div class="grid grid-cols-2 gap-3 mb-4">
                    <button class="bg-blue-900/50 hover:bg-blue-800 text-blue-200 p-4 rounded border border-blue-700 text-xs transition-colors">Atrium Kanan</button>
                    <button class="bg-red-900/50 hover:bg-red-800 text-red-200 p-4 rounded border border-red-700 text-xs transition-colors">Atrium Kiri</button>
                    <button class="bg-blue-900/50 hover:bg-blue-800 text-blue-200 p-4 rounded border border-blue-700 text-xs transition-colors">Ventrikel Kanan</button>
                    <button class="bg-red-900/50 hover:bg-red-800 text-red-200 p-4 rounded border-2 border-red-500 text-xs font-bold transition-colors">Ventrikel Kiri</button>
                </div>
            </div>
            <div class="w-full md:w-1/2 bg-rose-50 p-5 rounded-xl border border-rose-200 flex flex-col justify-center text-xs">
                <strong class="text-rose-800 block mb-2">Salur Darah Utama</strong>
                <ul class="space-y-2 text-slate-700">
                    <li><strong class="text-red-700">Arteri:</strong> Dinding tebal/kenyal, tekanan tinggi, bawa darah keluar jantung.</li>
                    <li><strong class="text-blue-700">Vena:</strong> Ada injap, dinding nipis, bawa darah masuk jantung.</li>
                    <li><strong class="text-purple-700">Kapilari:</strong> Dinding 1 sel, pertukaran gas & nutrien.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 3.3 Darah -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.3s;">
        <h3 class="text-xl font-bold text-rose-700 mb-4 border-b pb-2">3.3 Darah Manusia</h3>
        <div class="flex items-center gap-6 mb-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div class="w-16 h-32 bg-slate-200 rounded-b-xl border-2 border-slate-300 flex flex-col justify-end">
                <div class="w-full h-[55%] bg-yellow-200 flex items-center justify-center text-[9px] text-yellow-800 font-bold">Plasma 55%</div>
                <div class="w-full h-[5%] bg-white border-y border-slate-300"></div>
                <div class="w-full h-[40%] bg-red-600 flex items-center justify-center text-[9px] text-white font-bold">SDM 45%</div>
            </div>
            <div class="text-xs space-y-1 text-slate-700">
                <p><strong>Plasma:</strong> Angkut nutrien, gas, hormon.</p>
                <p><strong>Sel Darah Merah:</strong> Hemoglobin angkut O2.</p>
                <p><strong>Sel Darah Putih:</strong> Lawan penyakit.</p>
                <p><strong>Platlet:</strong> Bekukan darah.</p>
            </div>
        </div>
        <div class="bg-rose-50 p-3 rounded border border-rose-200 text-xs text-rose-900">
            <strong>Penderma Universal: O</strong> | <strong>Penerima Universal: AB</strong>. Kesilapan jenis darah menyebabkan pengentalan (koagulasi).
        </div>
    </div>

    <!-- 3.4 Tumbuhan -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.4s;">
        <h3 class="text-xl font-bold text-green-700 mb-4 border-b pb-2">3.4 Pengangkutan Tumbuhan</h3>
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-emerald-50 p-3 rounded border border-emerald-200 text-xs">
                <strong class="text-emerald-800 block mb-1">Transpirasi (Wap Air)</strong>
                Kadar meningkat jika suhu tinggi, angin laju, cahaya cerah, kelembapan rendah.
            </div>
            <div class="bg-teal-50 p-3 rounded border border-teal-200 text-xs">
                <strong class="text-teal-800 block mb-1">Gutasi (Titis Cecair)</strong>
                Berlaku waktu malam / udara sangat lembap melalui pinggir daun.
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded border border-blue-200 text-xs"><strong class="text-blue-800 block mb-1">Xilem</strong>Angkut air & mineral dari akar. Memberi sokongan.</div>
            <div class="bg-orange-50 p-3 rounded border border-orange-200 text-xs"><strong class="text-orange-800 block mb-1">Floem</strong>Angkut sukrosa (makanan) dari daun ke seluruh bahagian.</div>
        </div>
    </div>
</div>
`;
