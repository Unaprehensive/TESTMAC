// ==================== SETTINGS MANAGER v1.0 ====================
// Централизованная система управления настройками для Blueprint FX Terminal
// ================================================================

const SettingsManager = (function() {
    'use strict';
    
    // Ключ для localStorage
    const STORAGE_KEY = 'blueprint_fx_settings';
    
    // Дефолтные настройки
    const DEFAULT_SETTINGS = {
        // Основные настройки терминала
        terminal: {
            language: 'en',
            lastSymbol: 'EURUSD',
            lastTimeframe: 'H1',
            lastOrderType: 'market',
            defaultVolume: 0.01,
            defaultSL: null,
            defaultTP: null,
            slUnit: 'pips',
            tpUnit: 'pips'
        },
        
        // Настройки чарта
        chart: {
            showGrid: true,
            showPriceLine: true,
            candleWidth: 10,
            visibleCandles: 100,
            scrollOffset: 0,
            theme: 'cyberpunk'
        },
        
        // Позиции окон
        windows: {
            quickTrade: {
                visible: false,
                position: { x: null, y: null },
                minimized: false,
                expanded: false,
                settings: {
                    volume: 0.01,
                    sl: 10,
                    tp: 30,
                    trailing: false,
                    trailingProfit: 10,
                    trailingDistance: 5,
                    breakeven: false,
                    breakevenProfit: 5,
                    orderType: 'market'
                }
            },
            themeCustomizer: {
                position: { x: null, y: null }
            }
        },
        
        // Настройки индикатора BPFX
        bpfx: {
            sensitivity: 50,
            channelWidth: 2.5,
            lookback: 100,
            glowEffect: true,
            showSignals: true,
            channelFill: true,
            showTPSL: true,
            slPoints: 20,
            tp1Ratio: 1,
            tp2Ratio: 2,
            tp3Ratio: 3
        },
        
        // Кастомная тема
        customTheme: null,
        
        // Настройки панелей
        panels: {
            positionsHeight: 250,
            rightPanelTab: 'trading',
            positionsPanelTab: 'positions'
        },
        
        // Автоматизация по умолчанию
        automation: {
            presetTrailing: false,
            presetTrailingProfit: 10,
            presetTrailingDistance: 5,
            presetBreakeven: false,
            presetBreakevenProfit: 5
        },
        
        // История и статистика
        history: {
            lastDateFrom: null,
            lastDateTo: null,
            lastFilter: 'all'
        }
    };
    
    let settings = {};
    let saveTimeout = null;
    
    // Инициализация
    function init() {
        loadSettings();
        setupAutoSave();
        console.log('⚙️ Settings Manager initialized');
        return settings;
    }
    
    // Загрузка настроек из localStorage
    function loadSettings() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                settings = deepMerge(DEFAULT_SETTINGS, parsed);
                console.log('✅ Settings loaded from localStorage');
            } else {
                settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
                console.log('📝 Using default settings');
            }
        } catch (error) {
            console.error('❌ Error loading settings:', error);
            settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
        }
    }
    
    // Сохранение настроек в localStorage
    function saveSettings() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            console.log('💾 Settings saved');
        } catch (error) {
            console.error('❌ Error saving settings:', error);
        }
    }
    
    // Отложенное сохранение (debounce)
    function saveDebounced() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(saveSettings, 500);
    }
    
    // Глубокое слияние объектов
    function deepMerge(target, source) {
        const result = Object.assign({}, target);
        
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                if (target[key] && typeof target[key] === 'object') {
                    result[key] = deepMerge(target[key], source[key]);
                } else {
                    result[key] = source[key];
                }
            } else {
                result[key] = source[key];
            }
        }
        
        return result;
    }
    
    // Получить значение настройки
    function get(path, defaultValue = null) {
        const keys = path.split('.');
        let value = settings;
        
        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                return defaultValue;
            }
        }
        
        return value;
    }
    
    // Установить значение настройки
    function set(path, value) {
        const keys = path.split('.');
        let target = settings;
        
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!(key in target) || typeof target[key] !== 'object') {
                target[key] = {};
            }
            target = target[key];
        }
        
        const lastKey = keys[keys.length - 1];
        target[lastKey] = value;
        
        saveDebounced();
        
        // Вызываем событие для обновления UI
        window.dispatchEvent(new CustomEvent('settingsChanged', {
            detail: { path, value }
        }));
    }
    
    // Получить все настройки
    function getAll() {
        return JSON.parse(JSON.stringify(settings));
    }
    
    // Сбросить настройки к дефолтным
    function reset(path = null) {
        if (path) {
            const value = get(path, null, DEFAULT_SETTINGS);
            set(path, value);
        } else {
            settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
            saveSettings();
            window.location.reload();
        }
    }
    
    // Экспорт настроек
    function exportSettings() {
        const data = JSON.stringify(settings, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `blueprint_settings_${new Date().getTime()}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }
    
    // Импорт настроек
    function importSettings(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    settings = deepMerge(DEFAULT_SETTINGS, imported);
                    saveSettings();
                    window.location.reload();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            };
            
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }
    
    // Автоматическая настройка сохранения
    function setupAutoSave() {
        // Сохраняем при закрытии страницы
        window.addEventListener('beforeunload', saveSettings);
        
        // Сохраняем каждые 30 секунд
        setInterval(saveSettings, 30000);
    }
    
    // Применить настройки к UI
    function applyToUI() {
        // Язык
        if (typeof setLanguage === 'function') {
            setLanguage(settings.terminal.language);
        }
        
        // Тема
        if (settings.chart.theme && typeof changeTheme === 'function') {
            changeTheme(settings.chart.theme);
        }
        
        // Кастомная тема
        if (settings.customTheme) {
            for (const [key, value] of Object.entries(settings.customTheme)) {
                document.documentElement.style.setProperty(key, value);
            }
        }
        
        // Символ и таймфрейм
        const symbolSelect = document.getElementById('symbolSelect');
        if (symbolSelect && settings.terminal.lastSymbol) {
            symbolSelect.value = settings.terminal.lastSymbol;
        }
        
        // Объем по умолчанию
        const lotSize = document.getElementById('lotSize');
        if (lotSize && settings.terminal.defaultVolume) {
            lotSize.value = settings.terminal.defaultVolume;
        }
        
        // Настройки чарта
        const showGrid = document.getElementById('showGrid');
        if (showGrid) {
            showGrid.checked = settings.chart.showGrid;
        }
        
        const showPriceLine = document.getElementById('showPriceLine');
        if (showPriceLine) {
            showPriceLine.checked = settings.chart.showPriceLine;
        }
        
        // Quick Trade окно
        if (settings.windows.quickTrade.visible) {
            const qtwWidget = document.getElementById('quickTradeWidget');
            if (qtwWidget) {
                qtwWidget.style.display = 'block';
                
                if (settings.windows.quickTrade.position.x !== null) {
                    qtwWidget.style.left = settings.windows.quickTrade.position.x + 'px';
                    qtwWidget.style.top = settings.windows.quickTrade.position.y + 'px';
                }
                
                if (settings.windows.quickTrade.minimized) {
                    qtwWidget.classList.add('minimized');
                }
            }
        }
        
        // BPFX настройки
        applyBPFXSettings();
        
        // Высота панели позиций
        const positionsPanel = document.querySelector('.positions-panel');
        if (positionsPanel && settings.panels.positionsHeight) {
            positionsPanel.style.height = settings.panels.positionsHeight + 'px';
        }
    }
    
    // Применить настройки BPFX
    function applyBPFXSettings() {
        const bpfx = settings.bpfx;
        
        if (document.getElementById('bpfxSensitivity')) {
            document.getElementById('bpfxSensitivity').value = bpfx.sensitivity;
            document.getElementById('bpfxSensitivityValue').textContent = bpfx.sensitivity;
            
            document.getElementById('bpfxChannelWidth').value = bpfx.channelWidth;
            document.getElementById('bpfxChannelWidthValue').textContent = bpfx.channelWidth;
            
            document.getElementById('bpfxLookback').value = bpfx.lookback;
            document.getElementById('bpfxLookbackValue').textContent = bpfx.lookback;
            
            document.getElementById('bpfxGlowEffect').checked = bpfx.glowEffect;
            document.getElementById('bpfxShowSignals').checked = bpfx.showSignals;
            document.getElementById('bpfxChannelFill').checked = bpfx.channelFill;
            document.getElementById('bpfxShowTPSL').checked = bpfx.showTPSL;
            
            document.getElementById('bpfxSLPoints').value = bpfx.slPoints;
            document.getElementById('bpfxSLPointsValue').textContent = bpfx.slPoints;
            
            document.getElementById('bpfxTP1').value = bpfx.tp1Ratio;
            document.getElementById('bpfxTP1Value').textContent = bpfx.tp1Ratio.toFixed(1);
            
            document.getElementById('bpfxTP2').value = bpfx.tp2Ratio;
            document.getElementById('bpfxTP2Value').textContent = bpfx.tp2Ratio.toFixed(1);
            
            document.getElementById('bpfxTP3').value = bpfx.tp3Ratio;
            document.getElementById('bpfxTP3Value').textContent = bpfx.tp3Ratio.toFixed(1);
        }
    }
    
    // Публичный API
    return {
        init,
        get,
        set,
        getAll,
        reset,
        exportSettings,
        importSettings,
        applyToUI,
        save: saveSettings
    };
})();

// Автоматическая инициализация при загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        SettingsManager.init();
        setTimeout(() => SettingsManager.applyToUI(), 100);
    });
} else {
    SettingsManager.init();
    setTimeout(() => SettingsManager.applyToUI(), 100);
}

// Делаем доступным глобально
window.SettingsManager = SettingsManager;