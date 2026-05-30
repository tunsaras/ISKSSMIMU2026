// Gamification Module

class GamificationSystem {
    constructor() {
        this.xp = parseInt(localStorage.getItem('kssm_xp')) || 0;
        this.level = this.calculateLevel(this.xp);
        this.artifacts = JSON.parse(localStorage.getItem('kssm_artifacts')) || [];
        this.updateUI();
    }

    calculateLevel(xp) {
        // Every 100 XP is a level
        return Math.floor(xp / 100) + 1;
    }

    addXP(amount, reason = "Tugasan selesai") {
        this.xp += amount;
        const newLevel = this.calculateLevel(this.xp);
        let levelUp = false;

        if (newLevel > this.level) {
            this.level = newLevel;
            levelUp = true;
        }

        this.save();
        this.updateUI();
        this.showRewardPopup(amount, reason, levelUp);
    }

    discoverArtifact(id, name, icon, desc) {
        const exists = this.artifacts.find(a => a.id === id);
        if (!exists) {
            this.artifacts.push({ id, name, icon, desc, date: new Date().toISOString() });
            this.save();
            this.addXP(50, `Artifak Rahsia Ditemui: ${name}`);
            this.showRewardPopup(50, `Artifak ${name} telah ditambahkan ke Katalog!`, false);
        } else {
            this.showRewardPopup(0, `Anda sudah pun menemui ${name} sebelum ini.`, false);
        }
    }

    save() {
        localStorage.setItem('kssm_xp', this.xp);
        localStorage.setItem('kssm_artifacts', JSON.stringify(this.artifacts));
    }

    updateUI() {
        const levelEl = document.getElementById('user-level');
        const xpTextEl = document.getElementById('xp-text');
        const xpBarEl = document.getElementById('xp-bar');

        if (levelEl) levelEl.textContent = `Lv ${this.level}`;
        
        // Calculate progress to next level
        const currentLevelXp = (this.level - 1) * 100;
        const xpIntoLevel = this.xp - currentLevelXp;
        
        if (xpTextEl) xpTextEl.textContent = `${this.xp} XP`;
        
        if (xpBarEl) {
            const percentage = (xpIntoLevel / 100) * 100;
            xpBarEl.style.width = `${percentage}%`;
        }
    }

    showRewardPopup(xpGained, message, isLevelUp) {
        const modal = document.getElementById('reward-modal');
        const rewardMsg = document.getElementById('reward-message');
        
        if (!modal) return;
        
        if (isLevelUp) {
            rewardMsg.textContent = `Tahniah! Anda telah naik ke Tahap ${this.level}! (+${xpGained} XP)`;
        } else if (xpGained > 0) {
            rewardMsg.textContent = `${message}. Anda mendapat +${xpGained} XP!`;
        } else {
            rewardMsg.textContent = `Tahniah! ${message}`;
        }
        
        // Show modal with animation
        modal.classList.remove('hidden');
        // Trigger reflow
        void modal.offsetWidth;
        modal.classList.remove('opacity-0');
        modal.querySelector('#reward-content').classList.remove('scale-95');
        modal.querySelector('#reward-content').classList.add('scale-100');
    }
}

// Global functions for modal (since they are called from HTML onclick)
window.closeRewardModal = function() {
    const modal = document.getElementById('reward-modal');
    if (modal) {
        modal.classList.add('opacity-0');
        modal.querySelector('#reward-content').classList.remove('scale-100');
        modal.querySelector('#reward-content').classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
};

window.openCatalog = function() {
    const modal = document.getElementById('catalog-modal');
    const grid = document.getElementById('catalog-grid');
    if (!modal || !grid) return;
    
    // Total known artifacts for this demo
    const allArtifacts = [
        { id: 'oksigen_emas', name: 'Oksigen Emas', icon: 'fa-atom', desc: 'Ditemui di kawasan Bahan Cemar (Bab 2)' }
    ];

    grid.innerHTML = '';
    
    allArtifacts.forEach(art => {
        const found = window.gamification.artifacts.find(a => a.id === art.id);
        if (found) {
            grid.innerHTML += `
                <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-orange-500/30">
                        <i class="fa-solid ${art.icon} text-2xl text-white"></i>
                    </div>
                    <strong class="text-indigo-900 text-sm block mb-1">${art.name}</strong>
                    <span class="text-xs text-indigo-600">${art.desc}</span>
                </div>
            `;
        } else {
            grid.innerHTML += `
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center opacity-70 grayscale">
                    <div class="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-3">
                        <i class="fa-solid fa-question text-2xl text-slate-400"></i>
                    </div>
                    <strong class="text-slate-500 text-sm block mb-1">???</strong>
                    <span class="text-xs text-slate-400">Belum ditemui</span>
                </div>
            `;
        }
    });

    modal.classList.remove('hidden');
    // Trigger reflow
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modal.querySelector('#catalog-content').classList.remove('scale-95');
    modal.querySelector('#catalog-content').classList.add('scale-100');
};

window.closeCatalog = function() {
    const modal = document.getElementById('catalog-modal');
    if (modal) {
        modal.classList.add('opacity-0');
        modal.querySelector('#catalog-content').classList.remove('scale-100');
        modal.querySelector('#catalog-content').classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
};
