window.appPages = window.appPages || {};
window.appPages['bab2'] = `
<div class="space-y-6 fade-in pb-12">
    <div class="border-b border-slate-200 pb-4 slide-up">
        <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Bab 2</span>
        <h2 class="text-3xl font-extrabold text-slate-800 mt-3">Respirasi</h2>
        <p class="text-sm text-slate-600 mt-2">Membincangkan sistem respirasi manusia, pertukaran gas, serta adaptasi haiwan dan tumbuhan.</p>
    </div>

    <!-- 2.1 Sistem -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.1s;">
        <h3 class="text-xl font-bold text-emerald-700 mb-4 border-b pb-2">2.1 Sistem Respirasi Manusia</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <strong class="text-slate-800 block mb-3 text-sm">Laluan Udara</strong>
                <div class="flex flex-col items-center gap-1 text-[11px] font-bold text-emerald-800">
                    <div class="bg-emerald-100 py-1.5 px-4 rounded w-full text-center border border-emerald-200">Lubang Hidung → Rongga Hidung</div>
                    <i class="fa-solid fa-arrow-down text-slate-400"></i>
                    <div class="bg-emerald-100 py-1.5 px-4 rounded w-full text-center border border-emerald-200">Farinks → Larinks → Trakea</div>
                    <i class="fa-solid fa-arrow-down text-slate-400"></i>
                    <div class="bg-emerald-100 py-1.5 px-4 rounded w-full text-center border border-emerald-200">Bronkus → Bronkiol</div>
                    <i class="fa-solid fa-arrow-down text-slate-400"></i>
                    <div class="bg-emerald-200 py-2 px-4 rounded w-full text-center border border-emerald-300 text-xs">Alveolus</div>
                </div>
            </div>
            <div class="space-y-4">
                <div class="p-4 border border-blue-200 bg-blue-50 rounded-xl text-xs">
                    <strong class="text-blue-800 block mb-2 text-sm">Tarikan Nafas</strong>
                    <ul class="text-slate-700 space-y-1 list-disc pl-4 mb-2">
                        <li>Interkostal mengecut, rusuk naik.</li>
                        <li>Diafragma mendatar.</li>
                        <li>Isi padu toraks bertambah, tekanan udara berkurang. Udara masuk.</li>
                    </ul>
                    <img src="./images/Menarik%20Nafas.png" alt="Menarik Nafas" class="w-full rounded border border-blue-200">
                </div>
                <div class="p-4 border border-rose-200 bg-rose-50 rounded-xl text-xs">
                    <strong class="text-rose-800 block mb-2 text-sm">Hembusan Nafas</strong>
                    <ul class="text-slate-700 space-y-1 list-disc pl-4 mb-2">
                        <li>Interkostal mengendur, rusuk turun.</li>
                        <li>Diafragma melengkung ke atas.</li>
                        <li>Isi padu toraks berkurang, tekanan udara bertambah. Udara keluar.</li>
                    </ul>
                    <img src="./images/Menghembus%20Nafas.png" alt="Menghembus Nafas" class="w-full rounded border border-rose-200">
                </div>
            </div>
        </div>
    </div>

    <!-- 2.2 Pertukaran -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.2s;">
        <h3 class="text-xl font-bold text-emerald-700 mb-4 border-b pb-2">2.2 Pergerakan dan Pertukaran Gas</h3>
        <div class="space-y-4 text-sm text-slate-700">
            <div class="bg-rose-50 p-4 rounded-xl border border-rose-200">
                <strong class="text-rose-800 block mb-2 text-sm">Pengangkutan Oksigen & Respirasi Sel</strong>
                <p class="text-xs mb-2 leading-relaxed">Oksigen meresap dari alveolus ke darah, bergabung dengan hemoglobin bentuk <strong>oksihemoglobin</strong>.</p>
                <div class="font-mono text-[11px] bg-white p-3 rounded border border-rose-100 text-center text-rose-900 font-bold mb-3">Glukosa + Oksigen → Karbon dioksida + Air + Tenaga</div>
                <img src="./images/Pertukaran%20Gas%20dalam%20Alveolus.png" alt="Pertukaran Gas dalam Alveolus" class="w-full max-h-[250px] object-contain bg-white rounded p-1 border border-rose-100">
            </div>
            <strong class="text-slate-800 block mt-4 border-b pb-1">Adaptasi Alveolus:</strong>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-center">
                <div class="bg-emerald-50 p-3 rounded border border-emerald-200">Dinding Nipis (1 sel)</div>
                <div class="bg-emerald-50 p-3 rounded border border-emerald-200">Permukaan Lembap</div>
                <div class="bg-emerald-50 p-3 rounded border border-emerald-200">Luas Permukaan Besar</div>
                <div class="bg-emerald-50 p-3 rounded border border-emerald-200">Jaringan Kapilari Padat</div>
            </div>
        </div>
    </div>

    <!-- 2.3 Kesihatan -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.3s;">
        <h3 class="text-xl font-bold text-emerald-700 mb-4 border-b pb-2">2.3 Kesihatan Sistem Respirasi</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-800 p-5 rounded-xl text-slate-200 text-sm relative group">
                <strong class="text-rose-400 block mb-3 border-b border-slate-700 pb-2">Bahan Cemar</strong>
                <ul class="space-y-2 text-xs mb-4">
                    <li><strong>Tar Rokok:</strong> Karsinogen penyebab kanser.</li>
                    <li><strong>Karbon Monoksida:</strong> Kurangkan O2 dalam darah.</li>
                </ul>
                <img src="./images/Bahan%20Merbahaya%20utk%20Respirasi.png" alt="Bahan Merbahaya utk Respirasi" class="w-full bg-slate-700 rounded p-1 border border-slate-600">
                <i onclick="if(window.gamification){ window.gamification.discoverArtifact('oksigen_emas', 'Oksigen Emas', 'fa-atom', 'Dijumpai di kawasan Bahan Cemar (Bab 2)'); this.style.display='none'; }" class="fa-solid fa-atom text-yellow-400 absolute top-3 right-3 opacity-20 hover:opacity-100 cursor-pointer transition-opacity text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-pulse" title="Klik Saya!"></i>
            </div>
            <div class="bg-red-50 border border-red-200 p-5 rounded-xl text-sm text-red-900">
                <strong class="block mb-3 border-b border-red-200 pb-2">Penyakit Respirasi</strong>
                <ul class="list-disc pl-5 space-y-1 text-xs mb-4">
                    <li><strong>Asma:</strong> Laluan sempit.</li>
                    <li><strong>Bronkitis:</strong> Radang bronkus.</li>
                    <li><strong class="text-red-700">Emfisema:</strong> Alveolus rosak.</li>
                </ul>
                <div class="flex gap-2 justify-center">
                    <div class="flex flex-col items-center"><img src="./images/Peparu%20Sihat%20dan%20Rosak.png" class="h-24 object-contain bg-white rounded p-1 border border-red-100"><span class="text-[9px] mt-1 text-red-700">Peparu</span></div>
                    <div class="flex flex-col items-center"><img src="./images/Alveolus%20Sihat%20dan%20Rosak.png" class="h-24 object-contain bg-white rounded p-1 border border-red-100"><span class="text-[9px] mt-1 text-red-700">Alveolus</span></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2.4 & 2.5 Haiwan dan Tumbuhan -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 slide-up" style="animation-delay: 0.4s;">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-sm">
            <h3 class="text-xl font-bold text-emerald-700 mb-4 border-b pb-2">2.4 Adaptasi Haiwan</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="bg-slate-50 border border-slate-200 rounded p-2 text-center text-xs">
                    <img src="./images/Struktur%20Respirasi%20Katak.png" class="h-20 w-auto object-contain mx-auto mb-2">
                    <strong>Katak:</strong> Peparu & Kulit lembap.
                </div>
                <div class="bg-slate-50 border border-slate-200 rounded p-2 text-center text-xs">
                    <img src="./images/Pernafasan%20Melalui%20Insang.png" class="h-20 w-auto object-contain mx-auto mb-2">
                    <strong>Ikan:</strong> Insang & filamen nipis.
                </div>
                <div class="bg-slate-50 border border-slate-200 rounded p-2 text-center text-xs">
                    <img src="./images/Pernafasan%20Melalui%20Trakea.png" class="h-20 w-auto object-contain mx-auto mb-2">
                    <strong>Serangga:</strong> Sistem trakea.
                </div>
            </div>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-sm">
            <h3 class="text-xl font-bold text-emerald-700 mb-4 border-b pb-2">2.5 Stoma Tumbuhan</h3>
            <div class="mb-4">
                <img src="./images/Laluan%20pertukaran%20gas%20di%20dalam%20daun%20semasa%20fotosintesis.png" alt="Laluan pertukaran gas di dalam daun semasa fotosintesis" class="w-full bg-slate-50 p-2 rounded border border-slate-200">
            </div>
            <div class="space-y-3 text-xs">
                <div class="bg-yellow-50 p-3 border border-yellow-200 rounded">
                    <strong class="text-yellow-800 block mb-1">Siang (Terbuka)</strong> Air masuk (osmosis), stoma terbuka.
                </div>
                <div class="bg-indigo-50 p-3 border border-indigo-200 rounded">
                    <strong class="text-indigo-800 block mb-1">Malam (Tertutup)</strong> Air keluar, stoma tertutup elak kekeringan.
                </div>
            </div>
        </div>
    </div>
</div>
`;
