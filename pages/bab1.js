window.appPages = window.appPages || {};
window.appPages['bab1'] = `
<div class="space-y-8 pb-12">
    <div class="border-b border-slate-200 pb-4 slide-up">
        <span class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Bab 1</span>
        <h2 class="text-3xl font-extrabold mt-3">Rangsangan dan Gerak Balas</h2>
        <p class="text-sm text-slate-600 mt-2">Membincangkan bagaimana manusia, tumbuhan, dan haiwan mengesan dan bergerak balas terhadap persekitaran demi kelangsungan hidup.</p>
    </div>

    <!-- 1.1 Sistem Saraf -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.1s;">
        <h3 class="text-xl font-bold text-blue-700 mb-2 border-b pb-2">1.1 Sistem Saraf Manusia</h3>
        <p class="text-sm text-slate-700 mb-4">Sistem kawalan penting untuk mengesan rangsangan, menghantar impuls, mentafsir, dan menghasilkan gerak balas.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <strong class="text-slate-800 block mb-3 text-sm border-b pb-1">Laluan Impuls & Struktur</strong>
                <ul class="text-xs space-y-2 mb-4 text-slate-700 list-disc pl-4">
                    <li><strong>Sistem Saraf Pusat:</strong> Otak & Saraf Tunjang.</li>
                    <li><strong>Sistem Saraf Periferi:</strong> 12 pasang saraf kranium & 31 pasang saraf spina.</li>
                </ul>
                <div class="mb-4 bg-white p-2 rounded-lg border border-slate-100 shadow-sm flex justify-center">
                    <img src="./images/Sistem%20Saraf%20Periferi%20dan%20Pusat.png" alt="Sistem Saraf Periferi dan Pusat" class="max-h-[150px] object-contain rounded">
                </div>
                <div class="flex flex-col items-center gap-1 text-[11px] font-bold">
                    <div class="bg-rose-100 text-rose-800 py-1.5 px-4 rounded w-full text-center border border-rose-200">Rangsangan</div>
                    <i class="fa-solid fa-arrow-down text-slate-400"></i>
                    <div class="bg-orange-100 text-orange-800 py-1.5 px-4 rounded w-full text-center border border-orange-200">Afektor / Reseptor</div>
                    <i class="fa-solid fa-arrow-down text-slate-400"></i>
                    <div class="bg-blue-100 text-blue-800 py-1.5 px-4 rounded w-full text-center border border-blue-200">Sistem Saraf Pusat</div>
                    <i class="fa-solid fa-arrow-down text-slate-400"></i>
                    <div class="bg-emerald-100 text-emerald-800 py-1.5 px-4 rounded w-full text-center border border-emerald-200">Efektor</div>
                    <i class="fa-solid fa-arrow-down text-slate-400"></i>
                    <div class="bg-purple-100 text-purple-800 py-1.5 px-4 rounded w-full text-center border border-purple-200">Gerak Balas</div>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="grid grid-cols-2 gap-4 h-[160px] shrink-0">
                <!-- Flip Card 1 -->
                <div class="flip-card group cursor-pointer w-full h-full">
                    <div class="flip-card-inner rounded-xl shadow-sm border border-emerald-200">
                        <div class="flip-card-front bg-emerald-50 rounded-xl p-4">
                            <i class="fa-solid fa-brain text-emerald-500 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                            <strong class="text-emerald-800 block text-sm text-center">Tindakan Terkawal</strong>
                            <span class="text-[10px] text-emerald-600 mt-1 animate-pulse">(Halakan ke sini)</span>
                        </div>
                        <div class="flip-card-back bg-emerald-600 text-white rounded-xl p-4 overflow-y-auto">
                            <strong class="block text-sm mb-1 border-b border-emerald-400 pb-1">Tindakan Terkawal</strong>
                            <p class="text-[11px] leading-relaxed text-emerald-50 mb-2">Tindakan disedari, dikawal oleh otak. <br><br><em>Contoh: Membaca, menulis, berjalan.</em></p>
                            <img src="./images/Urutan%20Aliran%20Impuls%20dalam%20Tindakan%20Terkawal.png" alt="Tindakan Terkawal" class="w-full rounded bg-white p-1">
                        </div>
                    </div>
                </div>

                <!-- Flip Card 2 -->
                <div class="flip-card group cursor-pointer w-full h-full">
                    <div class="flip-card-inner rounded-xl shadow-sm border border-rose-200">
                        <div class="flip-card-front bg-rose-50 rounded-xl p-4">
                            <i class="fa-solid fa-bolt text-rose-500 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                            <strong class="text-rose-800 block text-sm text-center">Tindakan Luar Kawal</strong>
                            <span class="text-[10px] text-rose-600 mt-1 animate-pulse">(Halakan ke sini)</span>
                        </div>
                        <div class="flip-card-back bg-rose-600 text-white rounded-xl p-3 overflow-y-auto">
                            <strong class="block text-[12px] mb-1 border-b border-rose-400 pb-1">Tindakan Luar Kawal</strong>
                            <p class="text-[10px] leading-tight mb-1 text-rose-50">Automatik & tidak disedari.</p>
                            <ul class="text-[10px] list-disc pl-3 space-y-1 text-left text-rose-100 mb-2">
                                <li><strong>Medula Oblongata:</strong> Pernafasan, denyutan jantung.</li>
                                <li><strong>Saraf Tunjang:</strong> Refleks (tarik tangan objek panas).</li>
                            </ul>
                            <img src="./images/Medula%20Oblongata.png" alt="Medula Oblongata" class="w-full rounded bg-white p-1">
                        </div>
                    </div>
                </div>
                
                <!-- Tambahan Imej Tindakan Refleks -->
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-center items-center relative group">
                    <strong class="text-slate-800 text-sm mb-2 w-full border-b border-slate-200 pb-1 text-left">Laluan Arka Refleks (Tindakan Luar Kawal)</strong>
                    <div class="w-full bg-white rounded-lg flex flex-col justify-center gap-2 p-2 border border-slate-100 shadow-sm overflow-hidden relative">
                        <img src="./images/Urutan%20Aliran%20Impuls%20dalam%20Tindakan%20Luar%20Kawal.png" alt="Urutan Aliran Impuls dalam Tindakan Luar Kawal" class="w-full object-contain rounded">
                        <img src="./images/Tindakan%20Refleks.png" alt="Laluan Tindakan Refleks" class="max-h-[120px] w-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-300 mx-auto">
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Mini Checkpoint -->
        <div class="mt-6 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3 w-full md:w-auto">
                <div class="w-10 h-10 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 shrink-0">
                    <i class="fa-solid fa-gamepad text-xl"></i>
                </div>
                <div>
                    <strong class="text-indigo-800 dark:text-indigo-300 text-sm block">Uji Minda Segera!</strong>
                    <span class="text-xs text-indigo-600 dark:text-indigo-400">Menarik tangan apabila tersentuh cerek panas adalah tindakan...</span>
                </div>
            </div>
            <div class="flex gap-2 w-full md:w-auto shrink-0 justify-end">
                <button onclick="if(!this.disabled) { window.gamification.addXP(10, 'Uji Minda 1.1 Betul!'); this.innerHTML = '<i class=\\'fa-solid fa-check\\'></i> Betul!'; this.classList.add('bg-green-500', 'text-white', 'border-green-500'); this.classList.remove('bg-white', 'text-indigo-700'); this.disabled = true; this.nextElementSibling.disabled = true; this.nextElementSibling.classList.add('opacity-50'); }" class="px-4 py-2 bg-white border border-indigo-200 text-indigo-700 text-xs font-bold rounded-lg hover:bg-indigo-100 transition-colors shadow-sm">Luar Kawal</button>
                <button onclick="if(!this.disabled) { this.innerHTML = '<i class=\\'fa-solid fa-xmark\\'></i> Salah'; this.classList.add('bg-red-500', 'text-white', 'border-red-500'); this.classList.remove('bg-white', 'text-indigo-700'); this.disabled = true; }" class="px-4 py-2 bg-white border border-indigo-200 text-indigo-700 text-xs font-bold rounded-lg hover:bg-indigo-100 transition-colors shadow-sm">Terkawal</button>
            </div>
        </div>
    </div>

    <!-- 1.2 Makmal Deria -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.2s;">
        <h3 class="text-xl font-bold text-blue-700 mb-4 border-b pb-2">1.2 Makmal Deria (Manusia)</h3>
        
        <div class="flex flex-col lg:flex-row gap-6 min-h-[300px]">
            <div class="w-full lg:w-1/2 bg-slate-900 rounded-xl p-4 flex flex-col relative overflow-hidden text-center justify-center">
                <div class="flex-1 flex items-center justify-center bg-white rounded-lg p-2 mb-4 overflow-hidden border border-slate-300">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMdZDeAR5RZe7HeCm2A12S2MK-0MzJPN0m48SXY9-nBa8T6xl0-KeTehEVf_rpN5SwObpFdusTaXzhSqrBwWLyX-48AgUTej_wQu4Rsjbe92GvYpFGgu8zLp-xOpL8G4ki-QMXm8hsl98/s320/mata.JPG" alt="Struktur Mata" class="max-h-[220px] object-contain">
                </div>
                <p class="text-xs text-slate-400">Rajah Struktur Mata</p>
            </div>
            
            <div class="w-full lg:w-1/2 bg-slate-50 rounded-xl p-5 border border-slate-200 overflow-y-auto">
                <strong class="text-blue-800 block mb-2 border-b pb-1">Mekanisme Pendengaran (Telinga)</strong>
                <div class="flex flex-wrap gap-1 text-[10px] font-bold text-slate-700 mb-4">
                    <span class="bg-slate-200 p-1.5 rounded">Sumber Bunyi</span> ➔ 
                    <span class="bg-slate-200 p-1.5 rounded">Cuping</span> ➔ 
                    <span class="bg-amber-100 p-1.5 rounded text-amber-800">Gegendang (Bergetar)</span> ➔ 
                    <span class="bg-amber-100 p-1.5 rounded text-amber-800">Osikel (Kuatkan)</span> ➔ 
                    <span class="bg-emerald-100 p-1.5 rounded text-emerald-800">Koklea (Impuls)</span> ➔ 
                    <span class="bg-rose-100 p-1.5 rounded text-rose-800">Otak (Tafsir)</span>
                </div>
                <div class="grid grid-cols-3 gap-2 mb-4">
                    <div class="bg-white rounded p-1 border border-slate-200 flex flex-col items-center"><img src="./images/Bahagian%20Telinga%20Manusia.png" class="h-20 object-contain"><span class="text-[9px] mt-1 text-slate-500">Telinga</span></div>
                    <div class="bg-white rounded p-1 border border-slate-200 flex flex-col items-center"><img src="./images/Bahagian%20Hidung%20Manusia.png" class="h-20 object-contain"><span class="text-[9px] mt-1 text-slate-500">Hidung</span></div>
                    <div class="bg-white rounded p-1 border border-slate-200 flex flex-col items-center"><img src="./images/Bahagian%20Rasa%20Lidah%20Manusia.png" class="h-20 object-contain"><span class="text-[9px] mt-1 text-slate-500">Lidah</span></div>
                </div>

                <strong class="text-slate-800 block mb-2 border-b pb-1 mt-4">Had Deria & Kecacatan</strong>
                <ul class="text-xs space-y-2 text-slate-700 list-disc pl-4 mb-2">
                    <li><strong>Ilusi Optik & Titik Buta:</strong> Had penglihatan di mana imej tidak dapat dilihat dengan jelas.</li>
                    <li><strong>Rabun Jauh/Dekat:</strong> Imej terbentuk di hadapan/belakang retina. Boleh dibetulkan dengan kanta cekung/cembung.</li>
                </ul>
                <div class="flex gap-2 justify-center">
                    <img src="./images/Rabun%20Jauh.png" class="h-16 object-contain bg-white p-1 rounded border border-slate-200" title="Rabun Jauh">
                    <img src="./images/Rabun%20Dekat.png" class="h-16 object-contain bg-white p-1 rounded border border-slate-200" title="Rabun Dekat">
                </div>
            </div>
        </div>
    </div>

    <!-- 1.3 Tumbuhan -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.3s;">
        <h3 class="text-xl font-bold text-green-700 mb-4 border-b pb-2">1.3 Gerak Balas Tumbuhan</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <strong class="text-green-800 text-sm block mb-3 border-b border-green-200 pb-1">1. Tropisme (Terarah & Perlahan)</strong>
                <ul class="text-xs space-y-3 text-slate-700">
                    <li><strong class="text-yellow-700">Fototropisme:</strong> Pucuk tumbuh ke arah cahaya matahari (+).</li>
                    <li><strong class="text-slate-800">Geotropisme:</strong> Akar tumbuh ke arah graviti (+).</li>
                    <li><strong class="text-blue-700">Hidrotropisme:</strong> Akar memanjang ke arah air (+).</li>
                    <li><strong class="text-orange-700">Tigmotropisme:</strong> Sulur paut melilit sokongan (+).</li>
                </ul>
            </div>
            <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                <strong class="text-emerald-800 text-sm block mb-2 border-b border-emerald-200 pb-1">2. Gerak Balas Nastik (Pantas)</strong>
                <p class="text-xs text-slate-700 leading-relaxed">Gerak balas pantas yang <strong>tidak bergantung kepada arah</strong> datangnya rangsangan. <br><br>Contoh: Daun semalu <em>(Mimosa pudica)</em> terus menguncup apabila disentuh bagi melindungi dirinya daripada musuh.</p>
            </div>
        </div>
    </div>

    <!-- 1.4 Haiwan -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.4s;">
        <h3 class="text-xl font-bold text-orange-700 mb-4 border-b pb-2">1.4 Gerak Balas Haiwan</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <strong class="text-slate-800 text-sm block mb-2 border-b pb-1">Penglihatan Haiwan</strong>
                <div class="space-y-3 text-xs text-slate-700">
                    <div class="bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <strong class="text-amber-800 block mb-1">Stereoskopik (Pemangsa)</strong>
                        <p class="mb-2">Mata di hadapan kepala (Cth: harimau). Imej 3D tepat untuk anggar jarak mangsa.</p>
                        <img src="./images/Penglihatan%20Steoroskopik.png" class="w-full bg-white rounded p-1">
                    </div>
                    <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <strong class="text-slate-800 block mb-1">Monokular (Mangsa)</strong>
                        <p class="mb-2">Mata di sisi kepala (Cth: arnab). Medan penglihatan sangat luas tetapi imej 2D. Mengesan musuh.</p>
                        <img src="./images/Penglihatan%20Monokular.png" class="w-full bg-white rounded p-1">
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200 text-xs text-slate-700">
                    <strong class="text-indigo-800 text-sm block mb-2 border-b border-indigo-200 pb-1">Pendengaran Stereofonik</strong>
                    <p>Menggunakan kedua-dua belah telinga. Otak membandingkan perbezaan masa dan kekuatan bunyi yang tiba untuk menentukan arah & lokasi tepat sumber bunyi.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;
