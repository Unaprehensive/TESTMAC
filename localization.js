// localization.js - Полная версия с переводами для Position Settings
const translations = {
    en: {
        // Header
        "header.balance": "Balance",
        "header.equity": "Equity", 
        "header.margin": "Margin",
        "header.freeMargin": "Free Margin",
        "header.marginLevel": "Margin Level",
        "header.history": "History",
        "header.demo": "DEMO",
        
        // Trading Panel
        "trading.title": "Trading",
        "trading.settings": "Settings",
        "trading.volume": "Volume (Lots)",
        "trading.stopLoss": "Stop Loss",
        "trading.takeProfit": "Take Profit",
        "trading.orderType": "Order Type",
        "trading.marketOrder": "Market Order",
        "trading.limitOrder": "Limit Order",
        "trading.limitPrice": "Limit Price",
        "trading.buy": "BUY",
        "trading.sell": "SELL",
        "trading.buyLimit": "BUY LIMIT",
        "trading.sellLimit": "SELL LIMIT",
        
        // Positions
        "positions.title": "Open Positions",
        "positions.pending": "Pending Orders",
        "positions.noOpen": "No open positions",
        "positions.noPending": "No pending orders",
        "positions.symbol": "Symbol",
        "positions.type": "Type",
        "positions.volume": "Volume",
        "positions.openPrice": "Open Price",
        "positions.currentPrice": "Current Price",
        "positions.profit": "Profit",
        "positions.actions": "Actions",
        "positions.close": "Close",
        "positions.closeAll": "Close All",
        "positions.closeProfitable": "Close Profitable",
        "positions.closeLosing": "Close Losing",
        "positions.settings": "Settings",
        "positions.closeHalf": "Close 50%",
        "positions.total": "Total",
        "positions.ticket": "Ticket",
        "positions.distance": "Distance",
        "positions.time": "Time",
        "positions.modify": "Modify",
        "positions.cancel": "Cancel",
        "positions.cancelAll": "Cancel All",
        
        // Risk Management
        "risk.title": "Risk Management Mode",
        "risk.riskPercent": "Risk %",
        "risk.rewardRatio": "Reward Ratio",
        "risk.riskAmount": "Risk Amount",
        "risk.potentialProfit": "Potential Profit",
        "risk.calculatedVolume": "Calculated Volume",
        
        // Automation
        "automation.title": "Automation Settings",
        "automation.trailing": "Trailing Stop",
        "automation.breakeven": "Auto Breakeven",
        "automation.activation": "Activation",
        "automation.distance": "Distance",
        
        // Position Settings Dialog - НОВЫЕ ПЕРЕВОДЫ
        "dialog.positionSettings": "Position Settings",
        "dialog.stopLossTakeProfit": "Stop Loss / Take Profit",
        "dialog.stopLossDollar": "Stop Loss ($)",
        "dialog.takeProfitDollar": "Take Profit ($)",
        "dialog.autoTrailing": "Auto Trailing",
        "dialog.enableTrailing": "Enable Trailing",
        "dialog.activationProfit": "Activation Profit ($)",
        "dialog.trailingDistance": "Trailing Distance ($)",
        "dialog.autoBreakeven": "Auto Breakeven",
        "dialog.enableBreakeven": "Enable Breakeven",
        "dialog.partialClose": "Partial Close",
        "dialog.close50AtProfit": "Close 50% at profit ($)",
        "dialog.apply": "Apply Settings",
        "dialog.applyChanges": "Apply Changes",
        "dialog.enterAmount": "Enter amount",
        "dialog.disabled": "Disabled",
        
        // Modify Pending Dialog - НОВЫЕ ПЕРЕВОДЫ
        "dialog.modifyPending": "Modify Pending Order",
        "dialog.orderSettings": "Order Settings",
        "dialog.price": "Price",
        "dialog.optional": "Optional",
        "dialog.autoSettings": "Auto Settings (After Activation)",
        "dialog.trailingStart": "Trailing Start ($)",
        "dialog.breakevenAt": "Breakeven at ($)",
        
        // Placeholders - НОВЫЕ ПЕРЕВОДЫ
        "placeholder.enterAmount": "Enter amount",
        "placeholder.optional": "Optional",
        "placeholder.disabled": "Disabled",
        
        // Notifications
        "notify.connected": "Connected to server",
        "notify.disconnected": "Disconnected from server",
        "notify.orderExecuted": "Order executed",
        "notify.orderFailed": "Order failed",
        "notify.positionClosed": "Position closed",
        "notify.settingsUpdated": "Settings updated",
        "notify.themeChanged": "Theme changed to",
        
        // Status
        "status.connected": "Connected",
        "status.disconnected": "Disconnected",
        "status.spread": "Spread",
        "status.serverTime": "Server Time",
        
        // Confirmations
        "confirm.closeAll": "Close all positions?",
        "confirm.closeProfitable": "Close all profitable positions?",
        "confirm.closeLosing": "Close all losing positions?",
        "confirm.cancelOrder": "Cancel order",
        "confirm.cancelAllOrders": "Cancel all pending orders?",
        "confirm.clearDrawings": "Clear all drawings?",
        
        // History Page
        "history.title": "Trading History & Analytics",
        "history.filter": "Trade History Filter",
        "history.from": "From:",
        "history.to": "To:",
        "history.loadHistory": "Load History",
        "history.today": "Today",
        "history.yesterday": "Yesterday",
        "history.thisWeek": "This Week",
        "history.thisMonth": "This Month",
        "history.last3Months": "Last 3 Months",
        "history.thisYear": "This Year",
        "history.allTime": "All Time",
        "history.totalTrades": "Total Trades",
        "history.winRate": "Win Rate",
        "history.netProfit": "Net Profit",
        "history.averageWin": "Average Win",
        "history.averageLoss": "Average Loss",
        "history.profitFactor": "Profit Factor",
        "history.bestTrade": "Best Trade",
        "history.worstTrade": "Worst Trade",
        "history.cumulativeProfit": "Cumulative Profit",
        "history.tradeDistribution": "Trade Distribution",
        "history.profitableTrades": "Profitable Trades",
        "history.losingTrades": "Losing Trades",
        "history.breakeven": "Breakeven",
        "history.closedByTP": "Closed by TP",
        "history.closedBySL": "Closed by SL",
        "history.tradeDetails": "Trade Details",
        "history.dateTime": "Date/Time",
        "history.entryPrice": "Entry Price",
        "history.exitPrice": "Exit Price",
        "history.exitType": "Exit Type",
        "history.commission": "Commission",
        "history.swap": "Swap",
        "history.netPL": "Net P/L",
        "history.duration": "Duration",
        "history.exportCSV": "Export CSV",
        "history.searchTrades": "Search trades...",
        "history.noDataToDisplay": "No data to display",
        "history.noTradesFound": "No trades found",
        "history.refresh": "Refresh",
        "history.backToTerminal": "Back to Terminal",
        
        // Chart Elements
        "chart.open": "Open:",
        "chart.high": "High:",
        "chart.low": "Low:",
        "chart.close": "Close:",
        
        // Themes
        "theme.cyberpunk": "Cyberpunk",
        "theme.matrix": "Matrix",
        "theme.dark": "Dark",
        "theme.light": "Light",
        "theme.ocean": "Ocean",
        "theme.sunset": "Sunset",
        "theme.neon": "Neon",
        "theme.royal": "Royal",
        
        // Tools
        "tools.cursor": "Cursor",
        "tools.crosshair": "Crosshair",
        "tools.line": "Line",
        "tools.horizontalLine": "Horizontal Line",
        "tools.rectangle": "Rectangle",
        "tools.text": "Text",
        "tools.clearAll": "Clear All",
        "tools.indicators": "Indicators",
        "tools.buyLimit": "Buy Limit",
        "tools.sellLimit": "Sell Limit",
        
        // Chart Settings
        "chart.settings": "Chart Settings",
        "chart.gridLines": "Grid Lines", 
        "chart.priceLine": "Price Line",
        "chart.theme": "Theme"
    },
    
    ru: {
        // Header
        "header.balance": "Баланс",
        "header.equity": "Средства",
        "header.margin": "Маржа",
        "header.freeMargin": "Свободная маржа",
        "header.marginLevel": "Уровень маржи",
        "header.history": "История",
        "header.demo": "ДЕМО",
        
        // Trading Panel
        "trading.title": "Торговля",
        "trading.settings": "Настройки",
        "trading.volume": "Объем (Лоты)",
        "trading.stopLoss": "Убыток",
        "trading.takeProfit": "Прибыль",
        "trading.orderType": "Тип ордера",
        "trading.marketOrder": "Рыночный ордер",
        "trading.limitOrder": "Лимитный ордер",
        "trading.limitPrice": "Лимитная цена",
        "trading.buy": "Купить",
        "trading.sell": "Продать",
        "trading.buyLimit": "Buy Limit",
        "trading.sellLimit": "Sell Limit",
        
        // Positions
        "positions.title": "Открытые позиции",
        "positions.pending": "Отложенные ордера",
        "positions.noOpen": "Нет открытых позиций",
        "positions.noPending": "Нет отложенных ордеров",
        "positions.symbol": "Символ",
        "positions.type": "Тип",
        "positions.volume": "Объем",
        "positions.openPrice": "Цена открытия",
        "positions.currentPrice": "Текущая цена",
        "positions.profit": "Прибыль",
        "positions.actions": "Действия",
        "positions.close": "Закрыть",
        "positions.closeAll": "Закрыть все",
        "positions.closeProfitable": "Закрыть прибыльные",
        "positions.closeLosing": "Закрыть убыточные",
        "positions.settings": "Настройки",
        "positions.closeHalf": "Закрыть 50%",
        "positions.total": "Итого",
        "positions.ticket": "Тикет",
        "positions.distance": "Расстояние",
        "positions.time": "Время",
        "positions.modify": "Изменить",
        "positions.cancel": "Отменить",
        "positions.cancelAll": "Отменить все",
        
        // Risk Management
        "risk.title": "Режим управления рисками",
        "risk.riskPercent": "Риск %",
        "risk.rewardRatio": "Коэффициент прибыли",
        "risk.riskAmount": "Сумма риска",
        "risk.potentialProfit": "Потенциальная прибыль",
        "risk.calculatedVolume": "Рассчитанный объем",
        
        // Automation
        "automation.title": "Настройки автоматизации",
        "automation.trailing": "Трейлинг стоп",
        "automation.breakeven": "Авто безубыток",
        "automation.activation": "Активация",
        "automation.distance": "Дистанция",
        
        // Position Settings Dialog - НОВЫЕ ПЕРЕВОДЫ
        "dialog.positionSettings": "Настройки позиции",
        "dialog.stopLossTakeProfit": "Убыток / Прибыль",
        "dialog.stopLossDollar": "Убыток в ($)",
        "dialog.takeProfitDollar": "Прибыль в ($)",
        "dialog.autoTrailing": "Авто Трейлинг",
        "dialog.enableTrailing": "Включить Трейлинг",
        "dialog.activationProfit": "Активация при прибыли ($)",
        "dialog.trailingDistance": "Отступ трейлинга ($)",
        "dialog.autoBreakeven": "Авто Безубыток",
        "dialog.enableBreakeven": "Включить безубыток",
        "dialog.partialClose": "Частичное закрытие",
        "dialog.close50AtProfit": "Закрыть 50% при прибыли ($)",
        "dialog.apply": "Применить настройки",
        "dialog.applyChanges": "Применить изменения",
        "dialog.enterAmount": "Указывай в $",
        "dialog.disabled": "Отключено",
        
        // Modify Pending Dialog - НОВЫЕ ПЕРЕВОДЫ
        "dialog.modifyPending": "Изменить отложенный ордер",
        "dialog.orderSettings": "Настройки ордера",
        "dialog.price": "Цена",
        "dialog.optional": "Опционально",
        "dialog.autoSettings": "Авто настройки (После активации)",
        "dialog.trailingStart": "Старт трейлинга ($)",
        "dialog.breakevenAt": "Безубыток при ($)",
        
        // Placeholders - НОВЫЕ ПЕРЕВОДЫ
        "placeholder.enterAmount": "Введите сумму",
        "placeholder.optional": "Опционально",
        "placeholder.disabled": "Отключено",
        
        // Notifications
        "notify.connected": "Подключено к серверу",
        "notify.disconnected": "Отключено от сервера",
        "notify.orderExecuted": "Ордер исполнен",
        "notify.orderFailed": "Ошибка ордера",
        "notify.positionClosed": "Позиция закрыта",
        "notify.settingsUpdated": "Настройки обновлены",
        "notify.themeChanged": "Тема изменена на",
        
        // Status
        "status.connected": "Подключено",
        "status.disconnected": "Отключено",
        "status.spread": "Спред",
        "status.serverTime": "Время сервера",
        
        // Confirmations
        "confirm.closeAll": "Закрыть все позиции?",
        "confirm.closeProfitable": "Закрыть все прибыльные позиции?",
        "confirm.closeLosing": "Закрыть все убыточные позиции?",
        "confirm.cancelOrder": "Отменить ордер",
        "confirm.cancelAllOrders": "Отменить все отложенные ордера?",
        "confirm.clearDrawings": "Удалить все рисунки?",
        
        // History Page
        "history.title": "История торговли и аналитика",
        "history.filter": "Фильтр истории торговли",
        "history.from": "С:",
        "history.to": "До:",
        "history.loadHistory": "Загрузить историю",
        "history.today": "Сегодня",
        "history.yesterday": "Вчера",
        "history.thisWeek": "Эта неделя",
        "history.thisMonth": "Этот месяц",
        "history.last3Months": "Последние 3 месяца",
        "history.thisYear": "Этот год",
        "history.allTime": "Все время",
        "history.totalTrades": "Всего сделок",
        "history.winRate": "Прибыльных %",
        "history.netProfit": "Чистая прибыль",
        "history.averageWin": "Средняя прибыль",
        "history.averageLoss": "Средний убыток",
        "history.profitFactor": "Фактор прибыли",
        "history.bestTrade": "Лучшая сделка",
        "history.worstTrade": "Худшая сделка",
        "history.cumulativeProfit": "Накопленная прибыль",
        "history.tradeDistribution": "Распределение сделок",
        "history.profitableTrades": "Прибыльные сделки",
        "history.losingTrades": "Убыточные сделки",
        "history.breakeven": "Безубыток",
        "history.closedByTP": "Закрыто по ТП",
        "history.closedBySL": "Закрыто по СЛ",
        "history.tradeDetails": "Детали сделок",
        "history.dateTime": "Дата/Время",
        "history.entryPrice": "Цена входа",
        "history.exitPrice": "Цена выхода",
        "history.exitType": "Тип выхода",
        "history.commission": "Комиссия",
        "history.swap": "Своп",
        "history.netPL": "Чистый П/У",
        "history.duration": "Длительность",
        "history.exportCSV": "Экспорт CSV",
        "history.searchTrades": "Поиск сделок...",
        "history.noDataToDisplay": "Нет данных для отображения",
        "history.noTradesFound": "Сделки не найдены",
        "history.refresh": "Обновить",
        "history.backToTerminal": "Вернуться к терминалу",
        
        // Chart Elements
        "chart.open": "Открытие:",
        "chart.high": "Максимум:",
        "chart.low": "Минимум:",
        "chart.close": "Закрытие:",
        
        // Themes
        "theme.cyberpunk": "Киберпанк",
        "theme.matrix": "Матрица",
        "theme.dark": "Темная",
        "theme.light": "Светлая",
        "theme.ocean": "Океан",
        "theme.sunset": "Закат",
        "theme.neon": "Неон",
        "theme.royal": "Королевская",
        
        // Tools
        "tools.cursor": "Курсор",
        "tools.crosshair": "Перекрестие",
        "tools.line": "Линия",
        "tools.horizontalLine": "Горизонтальная линия",
        "tools.rectangle": "Прямоугольник",
        "tools.text": "Текст",
        "tools.clearAll": "Очистить все",
        "tools.indicators": "Индикаторы",
        "tools.buyLimit": "Лимит на покупку",
        "tools.sellLimit": "Лимит на продажу",
        
        // Chart Settings
        "chart.settings": "Настройки графика",
        "chart.gridLines": "Линии сетки", 
        "chart.priceLine": "Линия цены",
        "chart.theme": "Тема"
    }
};

// Текущий язык
let currentLanguage = localStorage.getItem('language') || 'en';

// Функция перевода
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Функция смены языка
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Обновляем кнопки языка
    updateLanguageButtons();
    
    // Обновляем все переводы
    updateAllTranslations();
    
    // Уведомление о смене языка
    if (typeof showNotification === 'function') {
        const langName = lang === 'ru' ? 'Русский' : 'English';
        showNotification(`Язык изменен на ${langName}`, 'success');
    }
}

// Обновление кнопок языка
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `lang-${currentLanguage}`) {
            btn.classList.add('active');
        }
    });
}

// Обновление всех переводов на странице
function updateAllTranslations() {
    // Обновляем все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        // Для элементов input с value
        if (element.tagName.toLowerCase() === 'input' && element.type === 'button') {
            element.value = translation;
        }
        // Для обычных элементов
        else {
            element.textContent = translation;
        }
    });
    
    // Обновляем плейсхолдеры
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Обновляем заголовки (title атрибуты)
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = t(key);
    });
    
    // Специальные случаи для динамического контента
    updateDynamicTranslations();
}

// Обновление динамического контента
function updateDynamicTranslations() {
    // Обновляем заголовок страницы если нужно
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) {
        document.title = t(titleKey);
    }
    
    // Обновляем кнопки торговли
    const buyButton = document.getElementById('buyButtonText');
    const sellButton = document.getElementById('sellButtonText');
    
    if (buyButton && sellButton) {
        if (document.getElementById('limitOrderBtn') && document.getElementById('limitOrderBtn').classList.contains('active')) {
            buyButton.textContent = t('trading.buyLimit');
            sellButton.textContent = t('trading.sellLimit');
        } else {
            buyButton.textContent = t('trading.buy');
            sellButton.textContent = t('trading.sell');
        }
    }
    
    // Обновляем таблицы позиций
    updatePositionsTableHeaders();
    
    // Обновляем статистику истории если на странице истории
    updateHistoryStatistics();
}

// Обновление заголовков таблицы позиций
function updatePositionsTableHeaders() {
    const positionsTable = document.querySelector('.positions-table');
    if (positionsTable) {
        const headers = positionsTable.querySelectorAll('th');
        const headerKeys = [
            'positions.symbol', 'positions.type', 'positions.volume',
            'positions.openPrice', 'positions.currentPrice', 'trading.stopLoss',
            'trading.takeProfit', 'positions.profit', 'automation.trailing',
            'automation.breakeven', 'positions.actions'
        ];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = t(headerKeys[index]);
            }
        });
    }
}

// Обновление статистики истории
function updateHistoryStatistics() {
    // Обновляем карточки статистики
    const statCards = [
        { id: 'totalTrades', labelKey: 'history.totalTrades' },
        { id: 'winRate', labelKey: 'history.winRate' },
        { id: 'netProfit', labelKey: 'history.netProfit' },
        { id: 'avgWin', labelKey: 'history.averageWin' },
        { id: 'avgLoss', labelKey: 'history.averageLoss' },
        { id: 'profitFactor', labelKey: 'history.profitFactor' },
        { id: 'bestTrade', labelKey: 'history.bestTrade' },
        { id: 'worstTrade', labelKey: 'history.worstTrade' }
    ];
    
    statCards.forEach(card => {
        const labelElement = document.querySelector(`#${card.id}`);
        if (labelElement) {
            const parentCard = labelElement.closest('.stat-card');
            if (parentCard) {
                const labelDiv = parentCard.querySelector('.stat-label');
                if (labelDiv) {
                    labelDiv.textContent = t(card.labelKey);
                }
            }
        }
    });
}

// Функция для добавления атрибутов перевода к элементам программно
function addTranslationAttributes() {
    // Можно добавлять атрибуты data-i18n к элементам, которые создаются динамически
    
    // Пример для кнопок подтверждения
    const confirmButtons = document.querySelectorAll('.confirm-btn');
    confirmButtons.forEach(btn => {
        if (btn.textContent.includes('Close All')) {
            btn.setAttribute('data-i18n', 'positions.closeAll');
        }
    });
}

// Инициализация при загрузке страницы
function initializeLocalization() {
    // Устанавливаем сохраненный язык
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    }
    
    // Обновляем кнопки языка
    updateLanguageButtons();
    
    // Добавляем атрибуты перевода
    addTranslationAttributes();
    
    // Обновляем все переводы
    updateAllTranslations();
    
    // Добавляем обработчики событий для кнопок смены языка
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const lang = e.target.id.replace('lang-', '');
            if (lang !== currentLanguage) {
                setLanguage(lang);
            }
        }
    });
}

// Функция для обновления переводов после загрузки нового контента
function refreshTranslations() {
    updateAllTranslations();
}

// Автоматическая инициализация при загрузке DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLocalization);
} else {
    initializeLocalization();
}

// Экспорт функций для использования в других скриптах
window.t = t;
window.setLanguage = setLanguage;
window.refreshTranslations = refreshTranslations;