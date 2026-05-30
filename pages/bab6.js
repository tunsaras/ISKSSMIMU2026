window.appPages = window.appPages || {};
window.appPages['bab6'] = `
<div class="space-y-6 fade-in pb-12">
    <div class="border-b border-slate-200 pb-4 slide-up">
        <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Bab 6</span>
        <h2 class="text-3xl font-extrabold text-slate-800 mt-3">Elektrik & Kemagnetan</h2>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 slide-up" style="animation-delay: 0.1s;">
        <strong class="text-yellow-700 text-lg block mb-3 border-b pb-1">6.1 Penjanaan Tenaga</strong>
        <p class="text-xs text-slate-700 mb-4"><strong>Arus Aruhan:</strong> Terhasil bila dawai potong medan magnet atau magnet potong dawai.</p>
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="border border-slate-200 bg-slate-50 p-4 rounded-xl text-center">
                <strong class="text-blue-700 block text-sm mb-2">Arus Terus (a.t.)</strong>
                <div class="h-10 bg-slate-800 rounded flex items-center justify-center p-2"><div class="w-full h-0.5 bg-green-400"></div></div>
                <p class="text-[10px] mt-2 text-slate-500">Satu arah. Cth: Bateri / Sel kering.</p>
            </div>
            <div class="border border-slate-200 bg-slate-50 p-4 rounded-xl text-center">
                <strong class="text-rose-700 block text-sm mb-2">Arus Ulang-Alik (a.u.)</strong>
                <div class="h-10 bg-slate-800 rounded flex items-center justify-center p-2">
                    <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" fill="none" stroke="#f43f5e" stroke-width="2"/></svg>
                </div>
                <p class="text-[10px] mt-2 text-slate-500">Berubah arah. Cth: Bekalan elektrik sesalur di rumah.</p>
            </div>
        </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-sm slide-up" style="animation-delay: 0.2s;">
        <strong class="text-yellow-700 text-lg block mb-3 border-b pb-1">6.2 Transformer</strong>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
            <div class="bg-red-50 p-4 rounded border border-red-200">
                <strong class="text-red-800 text-sm">Injak Naik (Step-up)</strong>
                <p class="mt-1 text-slate-700">Naikkan voltan. Bilangan lilitan gegelung sekunder (Output) lebih banyak dari primer (Input).</p>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
                <strong class="text-blue-800 text-sm">Injak Turun (Step-down)</strong>
                <p class="mt-1 text-slate-700">Turunkan voltan. Gegelung primer (Input) lebih banyak dari sekunder. Cth: Pengecas telefon bimbit.</p>
            </div>
        </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-sm slide-up" style="animation-delay: 0.3s;">
        <strong class="text-yellow-700 text-lg block mb-3 border-b pb-1">6.3 Pendawaian Plumbum & Keselamatan</strong>
        <div class="space-y-3 text-xs mb-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div class="flex items-center gap-3"><div class="w-6 h-4 bg-yellow-800 rounded shadow"></div><strong>Wayar Hidup (Coklat):</strong> Membawa arus masuk.</div>
            <div class="flex items-center gap-3"><div class="w-6 h-4 bg-blue-600 rounded shadow"></div><strong>Wayar Neutral (Biru):</strong> Mengembalikan arus ke pencawang.</div>
            <div class="flex items-center gap-3"><div class="w-6 h-4 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_5px,#22c55e_5px,#22c55e_10px)] rounded shadow"></div><strong>Wayar Bumi (Kuning-Hijau):</strong> Mengalirkan arus bocor terus ke bumi.</div>
        </div>
    </div>
</div>
`;
