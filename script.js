// --- Simple FAQ/intents for chatbot ---
const chatbotFAQ = [
    // Category 1: General Platform Information
    { q: ["what is karmayogi path", "about karmayogi", "karmayogi path"], a: "Karmayogi Path is a governance GPS designed to help government officials like you track your performance, manage objectives, and see how your work aligns with important national missions." },
    { q: ["who is this platform for", "who is it for", "who can use", "target audience"], a: "This platform is built for dedicated government officials to empower them with better performance tracking and objective management tools." },
    { q: ["main features", "what are the main features", "key features", "features", "what features"], a: "Key features include real-time performance tracking with PVS (Public Value Score) and CKP (Competency Karma Points), objective management, interactive data charts, and me, Yogi Bot, your personal AI assistant!" },

    // Category 2: User-Specific Questions (Vaishnavi Gupta's Data)
    { q: ["my current pvs score", "pvs score", "public value score"], a: "Your current Public Value Score (PVS) is 87. Keep up the excellent work!" },
    { q: ["ckp points", "how many ckp", "competency karma points"], a: "You have accumulated 1,245 Competency Karma Points (CKP)." },
    { q: ["my role", "what is my role", "designation"], a: "You are a Section Officer in the Ministry of Electronics and IT." },
    { q: ["objectives completed", "how many objectives", "completed objectives"], a: "You have successfully completed 6 out of your 8 total objectives. That's great progress!" },
    { q: ["my performance", "tell me about my performance", "performance summary"], a: "Your performance is strong. Your PVS is 87, you have 1,245 CKP, and you've completed 75% of your objectives. Your performance trend chart shows consistent improvement over the last few months." },

    // Category 3: Objectives and Deadlines
    { q: ["important tasks", "most important tasks", "high priority objectives"], a: "Your high-priority objectives are 'Implement Digital Service Standard' and 'Citizen Feedback System.' I would recommend focusing on these first." },
    { q: ["next deadline", "nearest deadline", "upcoming deadline"], a: "Your nearest deadline is for the objective 'Digital Literacy Training,' which is due on September 30, 2024." },
    { q: ["progress on api governance framework", "api governance framework progress", "api governance framework"], a: "The 'API Governance Framework' objective is currently 40% complete. The next step is to develop the API security guidelines." },
    { q: ["list all my objectives", "all objectives", "my objectives"], a: "Certainly. Your objectives are: Implement Digital Service Standard, Citizen Feedback System, API Governance Framework, Digital Literacy Training, and the Open Data Initiative." },

    // Category 4: Platform Metrics Explained
    { q: ["what does pvs mean", "pvs meaning", "pvs"], a: "PVS stands for Public Value Score. It's a special metric that measures your impact and efficiency in achieving your objectives, focusing on the real value you create through your work." },
    { q: ["what is ckp", "ckp meaning", "ckp"], a: "CKP stands for Competency Karma Points. It's a system that rewards you for high-quality work and effective collaboration with your team." },
    { q: ["improve my pvs", "how can i improve my pvs", "increase pvs"], a: "You can improve your PVS by completing your objectives efficiently, especially the high-priority ones, and by ensuring the quality of your work contributes positively to public service delivery." },

    // Category 5: How-To and Functionality
    { q: ["mark objective as complete", "how to mark complete", "complete objective"], a: "You can go to the 'My Objectives' list on your dashboard. For any objective that isn't 100% complete, you will see a 'Mark Complete' button. Just click that!" },
    { q: ["change theme", "dark mode", "switch to dark mode", "theme"], a: "You can switch between light and dark themes by clicking the sun/moon icon located at the top-right corner of the screen." },
    { q: ["see my team's performance", "team performance", "team comparison"], a: "Yes, you can. On your dashboard, there is a 'Team Performance Comparison' chart that shows the PVS scores for all members of your team." },

    // Category 6: Motivational & General Support
    { q: ["stressed", "feeling stressed", "i am stressed"], a: "I understand. Remember to take short breaks. Even a 1-minute mindful pause can make a big difference. You are doing important work that impacts millions of citizens - you've got this!" },
    { q: ["motivational quote", "motivate me", "inspire me"], a: "Here's your impact reminder: 'Your work today helps 2,45,000+ citizens live better lives tomorrow.' Every task you complete creates ripples of positive change across the nation!" },
    { q: ["hello yogi bot", "hi yogi bot", "namaste yogi bot", "hello bot"], a: "Namaste! I am Yogi Bot, your dedicated AI assistant and impact tracker. Did you know your work has already helped 2,45,000+ citizens? How can I help you create even more positive impact today?" },

    // Category 6: Impact & Citizen Benefits - UNIQUE FEATURE
    { q: ["impact of my work", "citizen impact", "how does my work help citizens", "real impact"], a: "Your work has created amazing impact! You've helped 2,45,000+ citizens, saved ₹12.5 crores of public money, and reduced service delivery time by 45 days on average. Every task you complete makes a real difference in people's lives!" },
    { q: ["money saved", "public money", "cost savings", "financial impact"], a: "Through your efficient work, you've helped save ₹12.5 crores of public money by eliminating redundant processes and improving digital services. This money can now be used for other citizen welfare programs!" },
    { q: ["time saved", "faster services", "service delivery"], a: "Your digital service improvements have reduced average government service delivery time by 45 days! Citizens now get certificates, licenses, and approvals much faster thanks to your work." },
    { q: ["citizens helped", "people benefited", "social impact"], a: "You've directly helped 2,45,000+ citizens through your digital governance improvements. From faster hospital records to online education access, your work is changing lives every day!" },
    { q: ["sustainability impact", "environmental benefit", "green governance"], a: "Your digital-first approach has achieved a 92% sustainability score by reducing paper usage, eliminating unnecessary travel, and creating efficient online processes!" },
    { q: ["real stories", "impact stories", "citizen feedback"], a: "Here's a real impact story: Rajesh Kumar got his business certificate in 2 hours instead of 15 days thanks to your Digital Service Standards! Your API Governance Framework helped 50,000+ patients get faster hospital service. Your work changes real lives!" },
    
    // General fallback
    { q: ["contact", "support", "help"], a: "You can contact us via the Contact Us section at the bottom of the homepage." },
    { q: ["how to use", "usage", "get started"], a: "Just explore the homepage, use the chatbot for help, and check out the features and sections for more info!" },
    { q: ["government", "office", "officials"], a: "Karmayogi Path is designed for government officials to streamline governance and improve efficiency using digital tools." },
    { q: ["ai", "artificial intelligence"], a: "AI is used for analytics, performance tracking, and smart recommendations throughout the platform." },
    { q: ["is it free", "pricing", "cost"], a: "Karmayogi Path is a demo/prototype for SIH 2023 and is currently free to use." },
    { q: ["animation", "3d", "lottie"], a: "The homepage features 3D backgrounds, Lottie animations, and smooth transitions for a modern experience." },
    { q: ["chatbot", "bot", "help"], a: "I'm your assistant! Ask me anything about Karmayogi Path, its features, or how to use the website." }
];

// Use free, reliable API alternatives
const API_OPTIONS = [
    {
        name: "Free AI API",
        url: "https://api.adviceslip.com/advice", // Simple working API
        type: "advice"
    },
    {
        name: "Local AI",
        url: null,
        type: "local"
    }
];
let currentApiIndex = 0;

// Test Advanced Local AI System
function testLocalAI() {
    console.log('🤖 Advanced Local AI System Activated!');
    console.log('✅ Intelligent response generation ready');
    console.log('✅ Contextual analysis enabled');
    console.log('✅ Multi-variant responses loaded');
    console.log('✅ FAQ integration active');
    
    // Test sample responses
    const testMessages = ['hello', 'what is my pvs score', 'help me', 'motivate me'];
    testMessages.forEach(msg => {
        const response = getAdvancedLocalAI(msg);
        console.log(`Test "${msg}": ${response.substring(0, 50)}...`);
    });
    
    return true;
}

// Enhanced AI-powered chatbot function with local intelligence
async function getChatbotAnswer(userMsg) {
    const msg = userMsg.toLowerCase();
    
    // First check FAQ for quick responses
    for (const item of chatbotFAQ) {
        if (item.q.some(q => msg.includes(q))) return item.a;
    }
    
    // Use advanced local AI responses
    return getAdvancedLocalAI(userMsg);
}

// Advanced Local AI System - Intelligent Response Generator
function getAdvancedLocalAI(userMsg) {
    const msg = userMsg.toLowerCase();
    
    // Greeting responses
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('namaste') || msg.includes('hey')) {
        const greetings = [
            "Hello! I'm Yogi Bot, your AI assistant for Karmayogi Path. I can help you with performance tracking, objectives, and seeing your impact on citizens. What would you like to know?",
            "Namaste! 🙏 I'm here to help you navigate your governance journey. Ask me about your PVS score, objectives, or citizen impact!",
            "Hi there! Ready to create some positive impact today? I can help you with performance insights, deadlines, and much more!"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Help & capabilities
    if (msg.includes('help') || msg.includes('what can you do') || msg.includes('capabilities')) {
        return "I can help you with: 📊 Check your PVS score & CKP points, 🎯 Track objectives & deadlines, 👥 See team performance, 💡 Get motivational insights, 📈 Understand your citizen impact, 🏆 View achievements & badges. Just ask me anything!";
    }
    
    // Performance & scores
    if (msg.includes('pvs') || msg.includes('score') || msg.includes('performance')) {
        const responses = [
            "Your current Public Value Score (PVS) is 87! This measures your impact and efficiency in achieving objectives. Keep up the excellent work! 🎯",
            "Great question! Your PVS of 87 shows strong performance. You're in the top 25% of officials in your department! 🌟",
            "Your performance is impressive! PVS: 87, CKP: 1,245 points. Your work is creating real impact for citizens! 📈"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Objectives & tasks
    if (msg.includes('objectives') || msg.includes('tasks') || msg.includes('deadline') || msg.includes('goals')) {
        return "You have completed 6 out of 8 objectives (75% completion rate). Your high-priority tasks are 'Digital Service Standard' and 'Citizen Feedback System'. Next deadline: Digital Literacy Training (Sept 30). Great progress! 📈";
    }
    
    // Team & collaboration
    if (msg.includes('team') || msg.includes('colleagues') || msg.includes('collaboration')) {
        return "Your team performance is strong! You're leading in collaboration with 1,245 CKP points. Team members: Anurag (Team Lead), Vaishnavi (Section Officer), Sia (Analyst), Shaina (Developer), Samarth (Designer), Mayank (Data Scientist). �";
    }
    
    // Impact & citizens
    if (msg.includes('impact') || msg.includes('citizen') || msg.includes('benefit') || msg.includes('help')) {
        return "Your work has incredible impact! 🎉 You've helped 2,45,000+ citizens, saved ₹12.5 crores of public money, and reduced service delivery time by 45 days. Every task you complete creates ripples of positive change! 🌟";
    }
    
    // Motivation & encouragement
    if (msg.includes('motivate') || msg.includes('inspire') || msg.includes('stressed') || msg.includes('encourage')) {
        const motivational = [
            "You're doing amazing work! 🌟 Remember: 'Your work today helps 2,45,000+ citizens live better lives tomorrow.' Every task creates positive change across the nation!",
            "Stay strong! 💪 Your digital governance improvements are transforming lives. Take a deep breath - you've got this! Your impact is real and measurable.",
            "Here's some inspiration: Rajesh Kumar got his business certificate in 2 hours instead of 15 days thanks to your Digital Service Standards! Your work changes real lives! 🎯"
        ];
        return motivational[Math.floor(Math.random() * motivational.length)];
    }
    
    // Thank you responses
    if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate')) {
        const thanks = [
            "You're very welcome! 🙏 I'm always here to help you create positive impact through your work. Keep up the great work for our citizens!",
            "My pleasure! It's wonderful to support your governance journey. Together we're making India better! 🇮🇳",
            "Thank you for your dedication to public service! I'm proud to assist such a committed government official. �"
        ];
        return thanks[Math.floor(Math.random() * thanks.length)];
    }
    
    // Question analysis for contextual responses
    if (msg.includes('how') || msg.includes('why') || msg.includes('what') || msg.includes('when') || msg.includes('where')) {
        return analyzeQuestionContext(userMsg);
    }
    
    // Smart contextual fallback
    return generateContextualResponse(userMsg);
}

// Analyze question context for better responses
function analyzeQuestionContext(userMsg) {
    const msg = userMsg.toLowerCase();
    
    if (msg.includes('how') && (msg.includes('improve') || msg.includes('increase'))) {
        return "To improve your performance: ✅ Focus on high-priority objectives first, ✅ Complete tasks efficiently, ✅ Collaborate effectively with your team, ✅ Monitor citizen impact regularly. Your current trajectory is excellent! 🎯";
    }
    
    if (msg.includes('what') && msg.includes('next')) {
        return "Your next steps: 🎯 Complete 'Digital Service Standard' (high priority), 📅 Prepare for 'Digital Literacy Training' deadline (Sept 30), 📊 Review your PVS progress, 👥 Check team collaboration opportunities. Stay focused! �";
    }
    
    if (msg.includes('why') && msg.includes('important')) {
        return "Your work is crucial because: 🏛️ It directly improves governance efficiency, 👥 It helps 2,45,000+ citizens access better services, 💰 It saves ₹12.5 crores of public money, ⚡ It reduces service delivery time by 45 days. You're making India better! 🇮🇳";
    }
    
    return "That's a great question! I'm here to help you with all aspects of Karmayogi Path - from performance tracking to citizen impact analysis. Could you be more specific about what you'd like to know? 🤔";
}

// Generate contextual responses based on keywords
function generateContextualResponse(userMsg) {
    const msg = userMsg.toLowerCase();
    const keywords = msg.split(' ');
    
    // Priority keyword matching
    const contextMap = {
        'government': "Karmayogi Path is designed specifically for government officials like you to enhance governance efficiency and citizen service delivery! 🏛️",
        'digital': "Digital transformation is key to modern governance! Your work in digital services has already helped 245,000+ citizens. Keep pushing the digital-first approach! 💻",
        'citizen': "Citizens are at the heart of everything we do! Your work has directly improved lives of 245,000+ people. Every completed objective creates positive ripples! 👥",
        'mission': "National missions are achieved through individual excellence! Your objectives align with India's development goals. You're contributing to the bigger picture! 🎯",
        'time': "Time management is crucial! You've already saved 45 days of average service delivery time through your efficient work. Keep optimizing! ⏰",
        'money': "Fiscal responsibility matters! Your work has saved ₹12.5 crores of public money through process improvements. Great job! 💰"
    };
    
    for (const [keyword, response] of Object.entries(contextMap)) {
        if (keywords.includes(keyword)) {
            return response;
        }
    }
    
    // Ultimate fallback with personalized touch
    return "I'm Yogi Bot, and I'm here to support your governance journey! 🤖 Whether you need help with performance tracking, objective management, or understanding your citizen impact - just ask! I have access to all your dashboard data and can provide personalized insights. What specific area would you like to explore? 🎯";
}

// Keep original function for backward compatibility
function getSmartFallback(userMsg) {
    return getAdvancedLocalAI(userMsg);
}

// Patch chatbot send logic to use FAQ
document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#chatbotInput');
    const sendBtn = document.querySelector('#chatbotSend');
    const chatBody = document.querySelector('#chatbotBody');
    if (input && sendBtn && chatBody) {
        console.log('Chatbot elements found successfully!');
        
        // Test Local AI system on load
        testLocalAI();
        
        sendBtn.addEventListener('click', async () => {
            const userMsg = input.value.trim();
            if (!userMsg) return;
            
            // Add user bubble
            const userBubble = document.createElement('div');
            userBubble.className = 'chatbot-message user';
            userBubble.textContent = userMsg;
            chatBody.appendChild(userBubble);
            
            // Show typing indicator
            const typingBubble = document.createElement('div');
            typingBubble.className = 'chatbot-message bot typing';
            typingBubble.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
            chatBody.appendChild(typingBubble);
            chatBody.scrollTop = chatBody.scrollHeight;
            
            input.value = '';
            
            // Get AI response
            try {
                const botResponse = await getChatbotAnswer(userMsg);
                chatBody.removeChild(typingBubble); // Remove typing indicator
                
                const botBubble = document.createElement('div');
                botBubble.className = 'chatbot-message bot';
                botBubble.textContent = botResponse;
                chatBody.appendChild(botBubble);
                chatBody.scrollTop = chatBody.scrollHeight;
            } catch (error) {
                console.log('Chatbot error:', error);
                chatBody.removeChild(typingBubble);
                // Use smart fallback instead of generic error
                const botResponse = getSmartFallback(userMsg);
                const botBubble = document.createElement('div');
                botBubble.className = 'chatbot-message bot';
                botBubble.textContent = botResponse;
                chatBody.appendChild(botBubble);
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        });
        // Enter key
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') sendBtn.click();
        });
    }
});
// Smooth section reveal on scroll
document.addEventListener('DOMContentLoaded', function() {
    const revealSections = () => {
        document.querySelectorAll('section, .section').forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                sec.classList.add('visible');
            }
        });
    };
    revealSections();
    window.addEventListener('scroll', revealSections);
});
// === FEATURE SLIDESHOW ===
document.addEventListener('DOMContentLoaded', function() {
    // Floating card position swap animation
    const card1 = document.querySelector('.floating-card.card-1');
    const card2 = document.querySelector('.floating-card.card-2');
    const card3 = document.querySelector('.floating-card.card-3');
    const cardStatic = document.querySelector('.floating-card-static');
    if (card1 && card3 && cardStatic) {
        let order = [card1, card3, cardStatic];
        function swapCards() {
            // Remove all position classes
            order.forEach(card => {
                card.classList.remove('card-1', 'card-2', 'card-3');
            });
            // Rotate order
            order.unshift(order.pop());
            // Assign new classes for position
            order[0].classList.add('card-1');
            order[1].classList.add('card-2');
            order[2].classList.add('card-3');
        }
        setInterval(swapCards, 3500);
    }
    // Hero Typewriter Animation
    const heroTypewriter = document.getElementById('heroTypewriter');
    const heroPhrases = [
        'Empowering government officials...',
        'Comprehensive performance tracking',
        'Objective management for national missions',
        'AI-powered governance, made simple',
        'Your path to digital transformation'
    ];
    let heroPhraseIdx = 0, heroCharIdx = 0, heroTyping = true;
    function typeHeroText() {
        if (!heroTypewriter) return;
        if (heroTyping) {
            if (heroCharIdx < heroPhrases[heroPhraseIdx].length) {
                heroTypewriter.textContent += heroPhrases[heroPhraseIdx][heroCharIdx++];
                setTimeout(typeHeroText, 38);
            } else {
                heroTyping = false;
                setTimeout(typeHeroText, 1200);
            }
        } else {
            if (heroCharIdx > 0) {
                heroTypewriter.textContent = heroTypewriter.textContent.slice(0, -1);
                heroCharIdx--;
                setTimeout(typeHeroText, 18);
            } else {
                heroTyping = true;
                heroPhraseIdx = (heroPhraseIdx + 1) % heroPhrases.length;
                setTimeout(typeHeroText, 400);
            }
        }
    }
    if (heroTypewriter) typeHeroText();

    // Hero Stats Count Up Animation
    function animateStat(statEl, target, suffix = '') {
        let current = 0;
        const increment = Math.ceil(target / 60);
        function update() {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                statEl.textContent = current.toLocaleString() + suffix;
                requestAnimationFrame(update);
            } else {
                statEl.textContent = target.toLocaleString() + suffix;
            }
        }
        update();
    }
    const statEls = document.querySelectorAll('.animated-stat');
    statEls.forEach(stat => {
        const h3 = stat.querySelector('h3');
        const target = parseInt(stat.getAttribute('data-target'), 10);
        const suffix = stat.getAttribute('data-suffix') || '';
        if (h3 && target) animateStat(h3, target, suffix);
    });
    // Impact Slideshow Logic
    const impactSlides = Array.from(document.querySelectorAll('.impact-slide'));
    const impactIndicators = document.getElementById('impactIndicators');
    let impactCurrent = 0;
    let impactTimer = null;
    function showImpactSlide(idx) {
        impactSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        if (impactIndicators) {
            impactIndicators.innerHTML = '';
            for (let i = 0; i < impactSlides.length; i++) {
                const dot = document.createElement('span');
                dot.className = 'impact-slide-indicator' + (i === idx ? ' active' : '');
                dot.addEventListener('click', () => {
                    impactCurrent = i;
                    showImpactSlide(i);
                    resetImpactTimer();
                });
                impactIndicators.appendChild(dot);
            }
        }
    }
    function nextImpactSlide() {
        impactCurrent = (impactCurrent + 1) % impactSlides.length;
        showImpactSlide(impactCurrent);
    }
    function resetImpactTimer() {
        if (impactTimer) clearInterval(impactTimer);
        impactTimer = setInterval(nextImpactSlide, 3000);
    }
    if (impactSlides.length > 0) {
        showImpactSlide(impactCurrent);
        resetImpactTimer();
    }
    // --- INFINITE FEATURE CAROUSEL ---
    const slides = Array.from(document.querySelectorAll('.feature-slide'));
    const wrapper = document.querySelector('.feature-slides-wrapper');
    const prevBtn = document.getElementById('featurePrev');
    const nextBtn = document.getElementById('featureNext');
    const pauseBtn = document.getElementById('featurePause');
    const indicators = document.getElementById('featureIndicators');
    let paused = false;
    let autoSlideTimer = null;
    const visibleCount = 3;
    const slideCount = slides.length;
    let position = 0;
    // Remove all clones if any (for hot reload/dev)
    if (wrapper) {
        Array.from(wrapper.querySelectorAll('.clone')).forEach(clone => clone.remove());
    }
    // Clone first N and last N slides for seamless infinite effect
    if (wrapper && slides.length > 0) {
        for (let i = 0; i < visibleCount; i++) {
            const cloneFirst = slides[i].cloneNode(true);
            cloneFirst.classList.add('clone');
            wrapper.appendChild(cloneFirst);
        }
        for (let i = slides.length - visibleCount; i < slides.length; i++) {
            const cloneLast = slides[i].cloneNode(true);
            cloneLast.classList.add('clone');
            wrapper.insertBefore(cloneLast, wrapper.firstChild);
        }
    }
    const allSlides = Array.from(wrapper ? wrapper.querySelectorAll('.feature-slide') : []);
    position = slideCount; // Start at first real slide
    function updateCarousel(animate = true) {
        if (!wrapper || allSlides.length === 0) return;
        const slideWidth = allSlides[0].offsetWidth + 24; // 24px margin
        if (animate) {
            wrapper.style.transition = 'transform 0.6s cubic-bezier(.77,0,.18,1)';
        } else {
            wrapper.style.transition = 'none';
        }
        wrapper.style.transform = `translateX(-${position * slideWidth}px)`;
        // Update indicators
        if (indicators) {
            indicators.innerHTML = '';
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('span');
                dot.className = 'feature-slide-indicator' + (i === ((position - slideCount + slideCount) % slideCount) ? ' active' : '');
                dot.addEventListener('click', () => showSlide(i));
                indicators.appendChild(dot);
            }
        }
    }
    function showSlide(idx) {
        position = idx + slideCount;
        updateCarousel();
        resetAutoSlide();
    }
    let isTransitioning = false;
    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        position++;
        updateCarousel();
        setTimeout(() => {
            if (position >= allSlides.length - visibleCount) {
                position = visibleCount;
                updateCarousel(false);
            }
            isTransitioning = false;
        }, 600);
        resetAutoSlide();
    }
    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        position--;
        updateCarousel();
        setTimeout(() => {
            if (position < visibleCount) {
                position = allSlides.length - visibleCount * 2;
                updateCarousel(false);
            }
            isTransitioning = false;
        }, 600);
        resetAutoSlide();
    }
    function autoSlide() {
        if (!paused) nextSlide();
    }
    function resetAutoSlide() {
        if (autoSlideTimer) clearInterval(autoSlideTimer);
        if (!paused) autoSlideTimer = setInterval(autoSlide, 4000);
    }
    if (slides.length > 0 && prevBtn && nextBtn && indicators && pauseBtn && wrapper) {
        // Initialize the carousel
        wrapper.style.width = `${allSlides.length * 100 / visibleCount}%`;
        allSlides.forEach(slide => {
            slide.style.flex = `0 0 ${100/visibleCount}%`;
        });
        
        // Center the carousel on load
        const centerOffset = (window.innerWidth - (allSlides[0].offsetWidth + 24) * visibleCount) / 2;
        wrapper.style.marginLeft = `${centerOffset}px`;
        
        updateCarousel(false);
        
        // Event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        pauseBtn.addEventListener('click', () => {
            paused = !paused;
            if (paused) {
                pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                if (autoSlideTimer) clearInterval(autoSlideTimer);
            } else {
                pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                resetAutoSlide();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const newCenterOffset = (window.innerWidth - (allSlides[0].offsetWidth + 24) * visibleCount) / 2;
            wrapper.style.marginLeft = `${newCenterOffset}px`;
            updateCarousel(false);
        });
        
        resetAutoSlide();
    }
});
// ========== AI CHATBOT ========== 
const chatbotMessages = [
    "Keep going! Every step counts.",
    "Take a deep breath. You're doing great!",
    "Remember to take short breaks for your mind.",
    "Stay positive and focused on your goals.",
    "You have the power to achieve amazing things!",
];

// Setup Chatbot UI and Toggle Functionality
function setupChatbotUI() {
    const chatbotWidget = document.getElementById('chatbot-widget');
    if (!chatbotWidget) return;

    const chatIcon = document.getElementById('chatbot-fab');
    const closeBtn = chatbotWidget.querySelector('.close-btn');
    
    // Ensure widget is hidden by default
    chatbotWidget.classList.remove('expanded');
    chatbotWidget.style.display = 'none';
    if (chatIcon) chatIcon.style.display = 'flex';

    // Toggle chatbot on icon click
    if (chatIcon) {
        chatIcon.addEventListener('click', () => {
            chatbotWidget.classList.add('expanded');
            chatbotWidget.style.display = 'flex';
            chatIcon.style.display = 'none';
        });
    }

    // Close chatbot on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            chatbotWidget.classList.remove('expanded');
            chatbotWidget.style.display = 'none';
            if (chatIcon) chatIcon.style.display = 'flex';
        });
    }
}

let chatbotInterval = null;

function initChatbot() {
    setupChatbotUI();
    
    const widget = document.getElementById('chatbot-widget');
    if (!widget) return;
    
    const body = document.getElementById('chatbotBody');
    const input = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('chatbotSend');

    // Send user message
    async function sendUserMessage() {
        const text = input.value.trim();
        if (!text) return;
        
        appendMessage(text, 'user');
        input.value = '';
        
        // Handle specific queries locally
        const lower = text.toLowerCase();
        if (lower.includes('deadline') || lower.includes('last date')) {
            let soonest = null;
            if (window.objectivesData && Array.isArray(window.objectivesData)) {
                soonest = window.objectivesData.reduce((min, obj) => {
                    const d = new Date(obj.dueDate);
                    return (!min || d < min.d) ? {d, obj} : min;
                }, null);
            }
            if (soonest) {
                appendMessage(`Your next deadline is for "${soonest.obj.title}" on ${soonest.obj.dueDate}. Prioritize this task!`, 'bot');
            } else {
                appendMessage("No deadlines found in your dashboard.", 'bot');
            }
            return;
        }
        
        if (lower.includes('important work')) {
            let important = [];
            if (window.objectivesData && Array.isArray(window.objectivesData)) {
                important = window.objectivesData.filter(obj => obj.priority === 'high');
            }
            if (important.length) {
                appendMessage(`Today's important work: ${important.map(obj => obj.title).join(', ')}.`, 'bot');
            } else {
                appendMessage("No high priority work found today.", 'bot');
            }
            return;
        }
        
        if (lower.includes('benefit') || lower.includes('loss')) {
            appendMessage("Completing your tasks on time increases your performance score and recognition. Missing deadlines may affect your progress and team goals.", 'bot');
            return;
        }
        
        // Show typing indicator
        const typingDiv = document.querySelector('.chatbot-typing');
        if (typingDiv) typingDiv.style.display = 'flex';
        
        try {
            const aiReply = await fetchAIChatbot(text, window.userData, window.objectivesData);
            if (typingDiv) typingDiv.style.display = 'none';
            appendMessage(aiReply, 'bot');
        } catch (e) {
            if (typingDiv) typingDiv.style.display = 'none';
            appendMessage("Sorry, I couldn't connect to AI right now. Please try again later.", 'bot');
        }
    }

    sendBtn.onclick = sendUserMessage;
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') sendUserMessage();
    });

    // Helper to append message
    function appendMessage(text, who) {
        const div = document.createElement('div');
        div.className = 'chatbot-message ' + who;
        div.textContent = text;
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
    }

    // Fetch AI API
    async function fetchAIChatbot(userMsg, userData, objectivesData) {
        const context = `User: ${userData ? userData.name : ''}, Role: ${userData ? userData.role : ''}, Department: ${userData ? userData.department : ''}.\nObjectives: ${objectivesData ? objectivesData.map(obj => `${obj.title} (priority: ${obj.priority}, due: ${obj.dueDate}, progress: ${obj.progress}%)`).join('; ') : ''}`;
        
        const response = await fetch('https://api.aiproxy.io/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful, motivational assistant for government employees. Analyze the user dashboard context and give clear, positive, and practical answers.' },
                    { role: 'system', content: context },
                    { role: 'user', content: userMsg }
                ]
            })
        });
        
        if (!response.ok) throw new Error('AI API error');
        const data = await response.json();
        return data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
            ? data.choices[0].message.content.trim()
            : "Sorry, I couldn't find an answer.";
    }
}
// ========== PAGE INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    showCurtainLoader();
    initCursorFollower();
    setTimeout(() => {
        showNotification('Welcome to Karmayogi', 'success');
    }, 400);
    setTimeout(() => {
        initChatbot();
        // Always keep chatbot fixed on screen
        const widget = document.getElementById('chatbot-widget');
        if (widget && !widget.classList.contains('fixed-bottom-right')) {
            widget.classList.add('fixed-bottom-right');
        }
    }, 1200);
    // Update profile card with user data
    if (window.userData) {
        const n = document.getElementById('profileName');
        const pvs = document.getElementById('profilePvs');
        const ckp = document.getElementById('profileCkp');
        if (n) n.textContent = window.userData.name;
        if (pvs) pvs.textContent = window.userData.pvs;
        if (ckp) ckp.textContent = window.userData.ckp;
        const role = document.querySelector('.profile-role');
        if (role) role.textContent = `${window.userData.role}, ${window.userData.department}`;
        const avatar = document.querySelector('.profile-avatar img');
        if (avatar) avatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(window.userData.firstName || 'user')}`;
    }

    // Info button tooltip logic
    document.querySelectorAll('.info-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Hide all tooltips
            document.querySelectorAll('.info-tooltip').forEach(tip => tip.style.display = 'none');
            document.querySelectorAll('.info-btn').forEach(b => { if (b !== btn) b.classList.remove('active'); });
            btn.classList.toggle('active');
            // Show/hide the correct tooltip
            const tipId = btn.getAttribute('data-tooltip');
            const tip = document.getElementById(tipId);
            if (btn.classList.contains('active') && tip) tip.style.display = 'block';
            else if (tip) tip.style.display = 'none';
        });
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
    document.addEventListener('click', function() {
        document.querySelectorAll('.info-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.info-tooltip').forEach(tip => tip.style.display = 'none');
    });
});

// ========== THEME MANAGEMENT ==========
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeIcon, savedTheme);
    
    // Theme toggle event
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
        // Update charts for new theme
        if (typeof updateChartsForTheme === 'function') {
            setTimeout(() => updateChartsForTheme(), 100);
        }
    });
}

function updateThemeIcon(icon, theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
}

function updateChartsForTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const isDark = currentTheme === 'dark';
    
    // Define theme colors
    const themeColors = {
        light: {
            textColor: '#1f2937',
            gridColor: 'rgba(0,0,0,0.1)',
            tooltipBg: 'rgba(15, 23, 42, 0.9)',
            tooltipText: '#fff'
        },
        dark: {
            textColor: '#f3f4f6',
            gridColor: 'rgba(255,255,255,0.1)',
            tooltipBg: 'rgba(35, 41, 54, 0.95)',
            tooltipText: '#f3f4f6'
        }
    };
    
    const colors = themeColors[currentTheme];
    
    // Update existing charts if they exist
    if (typeof performanceChart !== 'undefined' && performanceChart) {
        performanceChart.options.scales.x.ticks.color = colors.textColor;
        performanceChart.options.scales.y.ticks.color = colors.textColor;
        performanceChart.options.scales.x.grid.color = colors.gridColor;
        performanceChart.options.scales.y.grid.color = colors.gridColor;
        performanceChart.options.plugins.tooltip.backgroundColor = colors.tooltipBg;
        performanceChart.update();
    }
    
    if (typeof taskChart !== 'undefined' && taskChart) {
        taskChart.options.scales.x.ticks.color = colors.textColor;
        taskChart.options.scales.y.ticks.color = colors.textColor;
        taskChart.options.scales.x.grid.color = colors.gridColor;
        taskChart.options.scales.y.grid.color = colors.gridColor;
        taskChart.options.plugins.tooltip.backgroundColor = colors.tooltipBg;
        taskChart.update();
    }
    
    if (typeof teamChart !== 'undefined' && teamChart) {
        teamChart.options.scales.x.ticks.color = colors.textColor;
        teamChart.options.scales.y.ticks.color = colors.textColor;
        teamChart.options.scales.x.grid.color = colors.gridColor;
        teamChart.options.scales.y.grid.color = colors.gridColor;
        teamChart.options.plugins.tooltip.backgroundColor = colors.tooltipBg;
        teamChart.update();
    }
}

// ========== CURTAIN LOADER ========== 
function showCurtainLoader() {
    const curtain = document.getElementById('curtain-loader');
    if (!curtain) return;
    // 1. Sun appears instantly as soon as page loads
    setTimeout(() => {
        const sun = document.querySelector('.curtain-center-logo');
        if (sun) {
            sun.style.opacity = '1';
            sun.style.transition = 'opacity 0.18s cubic-bezier(.77,0,.18,1)';
        }
        // 2. Curtain opens almost immediately after sun appears
        setTimeout(() => {
            curtain.classList.add('open');
            // 3. Instantly hide both sun and curtain as soon as curtain is fully open
            setTimeout(() => {
                if (sun) sun.style.opacity = '0';
                curtain.classList.add('hide');
            }, 350); // much faster, matches curtain open visually
        }, 80); // sun appears 0.08s before curtain opens
    }, 400); // start after 0.4s (almost instant)
    // Hide fallback loader as well
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }, 4000);
}

// Add animation keyframes for Namaste girl
const style2 = document.createElement('style');
style2.textContent = `
@keyframes fadeInNamaste {
    from { opacity: 0; transform: scale(0.92) translateY(60px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes fadeOutNamaste {
    from { opacity: 1; transform: scale(1) translateY(0); }
    to { opacity: 0; transform: scale(0.96) translateY(-40px); }
}`;
document.head.appendChild(style2);

// ========== CURSOR FOLLOWER ========== 
function initCursorFollower() {
    const follower = document.getElementById('cursor-follower');
    if (!follower) return;
    // Remove any previous listeners to avoid duplicates
    let isDown = false;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let tracerX = mouseX;
    let tracerY = mouseY;
    let scale = 1;
    const speed = 0.35; // Higher = faster, 1 = instant

    function animate() {
        tracerX += (mouseX - tracerX) * speed;
        tracerY += (mouseY - tracerY) * speed;
        follower.style.transform = `translate(${tracerX - 12}px, ${tracerY - 12}px) scale(${scale})`;
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        follower.style.opacity = '0.7';
    });
    window.addEventListener('mousedown', (e) => {
        isDown = true;
        scale = 0.8;
        follower.style.opacity = '1';
    });
    window.addEventListener('mouseup', (e) => {
        isDown = false;
        scale = 1;
        follower.style.opacity = '0.7';
    });
    window.addEventListener('mouseleave', () => {
        follower.style.opacity = '0';
    });
    window.addEventListener('mouseenter', () => {
        follower.style.opacity = '0.7';
    });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a login or navigation link
            if (href === '#login' || href === '#dashboard') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// ========== PAGE NAVIGATION ==========
function showHome() {
    document.getElementById('home-page').classList.remove('page-hidden');
    document.getElementById('login-page').classList.add('page-hidden');
    document.getElementById('dashboard-page').classList.add('page-hidden');
    window.scrollTo(0, 0);
}

function showLogin() {
    document.getElementById('home-page').classList.add('page-hidden');
    document.getElementById('login-page').classList.remove('page-hidden');
    document.getElementById('dashboard-page').classList.add('page-hidden');
    window.scrollTo(0, 0);
}

// Auto fill login credentials
function autoFillLogin() {
    document.getElementById('loginEmail').value = 'vaishnavi.gupta@gov.in';
    document.getElementById('loginPassword').value = 'karmayogi2024';
    showNotification('Demo credentials filled!', 'success');
}

function showDashboard() {
    document.getElementById('home-page').classList.add('page-hidden');
    document.getElementById('login-page').classList.add('page-hidden');
    document.getElementById('dashboard-page').classList.remove('page-hidden');
    window.scrollTo(0, 0);
    // Always keep chatbot fixed on screen
    const widget = document.getElementById('chatbot-widget');
    if (widget && !widget.classList.contains('fixed-bottom-right')) {
        widget.classList.add('fixed-bottom-right');
    }
    // Initialize dashboard
    setTimeout(() => {
        initDashboard();
    }, 100);
}

// ========== LOGIN HANDLER ==========
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Validate credentials
    if (email === 'vaishnavi.gupta@gov.in' && password === 'karmayogi2024') {
        // Set user name
        document.getElementById('userName').textContent = userData.name;
        
        // Show success message
        showNotification('Login Successful!', 'success');
        
        // Navigate to dashboard
        setTimeout(() => {
            showDashboard();
        }, 500);
    } else {
        showNotification('Invalid credentials. Please try again.', 'error');
    }
});

// ========== LOGOUT HANDLER ==========
function handleLogout() {
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        showHome();
        // Reset form
        document.getElementById('loginForm').reset();
    }, 500);
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========== DASHBOARD INITIALIZATION ========== 
function initDashboard() {
    updateKPICards();
    loadObjectives();
    initCharts();
    initAdvancedCharts();
    updateWorkCompletion();
    // Add encourage button functionality
    setupEncourageButtons();
}
// ========== ENCOURAGE BUTTON FUNCTIONALITY ========== 
function setupEncourageButtons() {
    // Find all encourage buttons in the dashboard team section
    document.querySelectorAll('.team-encourage').forEach(btn => {
        btn.addEventListener('click', function() {
            // Animate the button (simple scale bounce)
            btn.style.transition = 'transform 0.18s cubic-bezier(.77,0,.18,1)';
            btn.style.transform = 'scale(1.18)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 180);
            // Show notification with team member's name
            const card = btn.closest('.team-member-box');
            const name = card ? card.querySelector('.team-name')?.textContent?.trim() : '';
            showNotification(`👏 You encouraged ${name || 'your teammate'}!`, 'success');
        });
    });
}

// ========== UPDATE KPI CARDS ==========
function updateKPICards() {
    document.getElementById('pvsScore').textContent = userData.pvs;
    document.getElementById('ckpPoints').textContent = userData.ckp.toLocaleString();
    document.getElementById('objectives').textContent = `${userData.objectivesCompleted}/${userData.totalObjectives}`;
    document.getElementById('highPriority').textContent = userData.highPriorityTasks;
}

// ========== LOAD OBJECTIVES ==========
function loadObjectives() {
    const container = document.getElementById('objectivesList');
    container.innerHTML = objectivesData.map((obj, idx) => `
        <div class="objective-item${obj.progress === 100 ? ' completed' : ''}" data-idx="${idx}">
            <div class="objective-header">
                <h4 class="objective-title">${obj.title}</h4>
                <span class="priority-badge ${obj.priority}">${obj.priority}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${obj.progress}%"></div>
            </div>
            <p class="progress-text">${obj.progress}% Complete - Due: ${formatDate(obj.dueDate)}</p>
            <button class="complete-btn" ${obj.progress === 100 ? 'disabled' : ''}>Mark Complete</button>
        </div>
    `).join('');
    // Animate progress bars
    setTimeout(() => {
        const progressBars = container.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 100);
    // Add complete button logic
    container.querySelectorAll('.complete-btn').forEach((btn, i) => {
        btn.addEventListener('click', function() {
            completeObjectiveWithNotification(i);
        });
    });
}

// Show celebration overlay and confetti
function showCelebration(objective) {
    const overlay = document.getElementById('celebrationOverlay');
    const msg = document.getElementById('celebrationMsg');
    const benefits = document.getElementById('celebrationBenefits');
    if (!overlay || !msg || !benefits) return;
    msg.textContent = `Objective "${objective.title}" completed! Here are your benefits:`;
    const benefitList = [
        'Society benefited: Improved public service delivery',
        'Increased citizen satisfaction',
        'Enhanced transparency and accountability',
        'Boosted team morale and collaboration',
        'Positive impact on national mission goals',
        'Recognition for your contribution to society',
        'Performance score increased',
        'Eligible for new rewards',
        'Motivation boost!'
    ];
    benefits.innerHTML = benefitList.map(b => `<li>✅ ${b}</li>`).join('');
    overlay.style.display = 'flex';
    // Play celebration sound then trigger staged effects (precise sync)
    playCelebrationSound(() => {
        startCelebrationEffects();
    });
}

// Multi-direction party poppers (DOM based)
function launchPartyPoppers() {
    const overlay = document.getElementById('celebrationOverlay');
    if (!overlay) return;
    // Create container once
    let popWrap = document.getElementById('popperContainer');
    if (!popWrap) {
        popWrap = document.createElement('div');
        popWrap.id = 'popperContainer';
        popWrap.style.position = 'fixed';
        popWrap.style.inset = '0';
        popWrap.style.pointerEvents = 'none';
        popWrap.style.zIndex = '99999';
        document.body.appendChild(popWrap);
    }
    // Clear previous
    popWrap.innerHTML = '';
    const directions = [
        { side: 'left', count: 14, baseX: -30, baseY: () => Math.random() * window.innerHeight, vx: () => 4 + Math.random()*2, vy: () => (Math.random()-0.5)*2 },
        { side: 'right', count: 14, baseX: () => window.innerWidth + 30, baseY: () => Math.random() * window.innerHeight, vx: () => - (4 + Math.random()*2), vy: () => (Math.random()-0.5)*2 },
        { side: 'top', count: 16, baseX: () => Math.random() * window.innerWidth, baseY: -30, vx: () => (Math.random()-0.5)*2, vy: () => 4 + Math.random()*2 },
        { side: 'bottom', count: 16, baseX: () => Math.random() * window.innerWidth, baseY: () => window.innerHeight + 30, vx: () => (Math.random()-0.5)*2, vy: () => - (4 + Math.random()*2) }
    ];
    const pieces = [];
    const colors = ['#ff9800','#ff6d00','#7fd8f7','#b388ff','#f472b6','#fbbf24','#38bdf8','#a78bfa'];
    directions.forEach(dir => {
        for (let i=0;i<dir.count;i++) {
            const el = document.createElement('div');
            el.className = 'pop-frag';
            const size = 8 + Math.random()*10;
            const x = typeof dir.baseX === 'function' ? dir.baseX() : dir.baseX;
            const y = typeof dir.baseY === 'function' ? dir.baseY() : dir.baseY;
            el.style.position='fixed';
            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.style.width = size + 'px';
            el.style.height = size*0.6 + 'px';
            el.style.background = colors[Math.floor(Math.random()*colors.length)];
            el.style.borderRadius = '2px';
            el.style.opacity = '0';
            el.style.transform = 'translateZ(0)';
            el.style.boxShadow = '0 0 6px -1px #0003';
            popWrap.appendChild(el);
            pieces.push({ el, x, y, vx: dir.vx(), vy: dir.vy(), r: (Math.random()-0.5)*0.3, life: 0 });
        }
    });
    const start = performance.now();
    function animate(t) {
        const dt = (t-start)/1000;
        pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05; // gravity
            p.el.style.left = p.x + 'px';
            p.el.style.top = p.y + 'px';
            p.el.style.opacity = Math.min(1, dt*2);
            p.el.style.transform = `rotate(${(dt*4 + p.r)*180}deg)`;
        });
        if (dt < 2.8) requestAnimationFrame(animate); else popWrap.innerHTML='';
    }
    requestAnimationFrame(animate);
    // Radial center burst
    radialBurst();
}

function radialBurst() {
    const centerX = window.innerWidth/2;
    const centerY = window.innerHeight/2;
    const fragCount = 28;
    const wrap = document.getElementById('popperContainer');
    if (!wrap) return;
    const colors = ['#ff9800','#ff6d00','#7fd8f7','#b388ff','#f472b6','#fbbf24'];
    for (let i=0;i<fragCount;i++) {
        const el = document.createElement('div');
        el.className = 'pop-center';
        const size = 6 + Math.random()*10;
        const angle = (Math.PI*2/fragCount)*i + Math.random()*0.2;
        const speed = 3 + Math.random()*3;
        el.style.position='fixed';
        el.style.left = centerX + 'px';
        el.style.top = centerY + 'px';
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.background = colors[i%colors.length];
        el.style.borderRadius = '50%';
        el.style.opacity='0';
        el.style.transform='translate(-50%,-50%)';
        wrap.appendChild(el);
        const vx = Math.cos(angle)*speed;
        const vy = Math.sin(angle)*speed;
        let life=0;
        function anim() {
            life+=0.016;
            const nx = centerX + vx*life*40;
            const ny = centerY + vy*life*40 + life*life*60; // gravity arc
            el.style.left = nx + 'px';
            el.style.top = ny + 'px';
            el.style.opacity = Math.min(1, life*3);
            el.style.transform = `translate(-50%,-50%) scale(${1+life*0.6})`;
            if (life < 1.6) requestAnimationFrame(anim); else el.remove();
        }
        requestAnimationFrame(anim);
    }
}

// Staged celebration effects for tighter sync with audio peak
function startCelebrationEffects(){
    // Immediate directional poppers & center burst for attack of sound
    launchPartyPoppers();
    radialBurst();
    // Slight delay before confetti rain so layers feel intentional
    setTimeout(() => { launchConfetti(); }, 140);
}

// Celebration sound logic with fallback
function playCelebrationSound(cb){
    const sources = [
        'https://cdn.jsdelivr.net/gh/itsrealfarhan/public-assets/celebration/ta-da.mp3',
        'https://soundbible.com/mp3/Ta%20Da-SoundBible.com-1884170640.mp3'
    ];
    let played = false;
    function trySrc(i){
        if(i>=sources.length){ if(cb) cb(); return; }
        const audio = new Audio(sources[i]);
        audio.volume = 0.55;
        const done = () => { if(!played){ played=true; if(cb) cb(); } };
        // Fire callback very close to perceptual onset
        audio.addEventListener('play', () => { requestAnimationFrame(() => done()); });
        audio.addEventListener('error', () => { trySrc(i+1); });
        const p = audio.play();
        if(p && p.catch){ p.catch(() => { trySrc(i+1); }); }
    }
    trySrc(0);
}

// Simple confetti animation
function launchConfetti() {
    const canvas = document.getElementById('celebrationConfetti');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const confetti = [];
    for (let i = 0; i < 120; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            r: 6 + Math.random() * 8,
            d: Math.random() * 2 + 1,
            color: `hsl(${Math.random()*360},90%,60%)`,
            tilt: Math.random() * 10 - 5
        });
    }
    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.ellipse(c.x, c.y, c.r, c.r/2, c.tilt, 0, 2*Math.PI);
            ctx.fillStyle = c.color;
            ctx.fill();
        });
        update();
        if (frame++ < 90) requestAnimationFrame(draw);
    }
    function update() {
        confetti.forEach(c => {
            c.y += c.d * 4;
            c.x += Math.sin(c.y/40) * 2;
            c.tilt += Math.random() * 0.2 - 0.1;
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });
    }
    draw();
}

// ========== FORMAT DATE ==========
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// ========== INITIALIZE CHARTS ==========
let performanceChart, taskChart, teamChart;

function initCharts() {
    // Destroy existing charts if they exist
    if (performanceChart) performanceChart.destroy();
    if (taskChart) taskChart.destroy();
    if (teamChart) teamChart.destroy();
    
    // Performance Trend Chart
    const perfCtx = document.getElementById('performanceChart');
    if (perfCtx) {
        performanceChart = new Chart(perfCtx.getContext('2d'), {
            type: 'line',
            data: performanceTrendData,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        padding: 12,
                        borderRadius: 8,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 70,
                        max: 100,
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        },
                        ticks: {
                            color: getComputedStyle(document.documentElement)
                                .getPropertyValue('--text-secondary')
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: getComputedStyle(document.documentElement)
                                .getPropertyValue('--text-secondary')
                        }
                    }
                }
            }
        });
    }
    
    // Task Distribution Chart
    const taskCtx = document.getElementById('taskChart');
    if (taskCtx) {
        taskChart = new Chart(taskCtx.getContext('2d'), {
            type: 'doughnut',
            data: taskDistributionData,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 13,
                                weight: '600'
                            },
                            color: getComputedStyle(document.documentElement)
                                .getPropertyValue('--text-primary')
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        padding: 12,
                        borderRadius: 8,
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Team Performance Chart
    const teamCtx = document.getElementById('teamChart');
    if (teamCtx) {
        teamChart = new Chart(teamCtx.getContext('2d'), {
            type: 'bar',
            data: teamPerformanceData,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        padding: 12,
                        borderRadius: 8,
                        callbacks: {
                            label: function(context) {
                                return `PVS Score: ${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        },
                        ticks: {
                            color: getComputedStyle(document.documentElement)
                                .getPropertyValue('--text-secondary')
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: getComputedStyle(document.documentElement)
                                .getPropertyValue('--text-secondary')
                        }
                    }
                }
            }
        });
    }
}

// ========== ADD ANIMATION STYLES ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== ADVANCED DASHBOARD FUNCTIONALITY ==========

// Advanced Charts Variables
let workCompletionPieChart, performancePieChart, monthlyProgressChart, departmentComparisonChart;

// Initialize Advanced Charts
function initAdvancedCharts() {
    createWorkCompletionPieChart();
    createPerformancePieChart();
    createMonthlyProgressChart();
    createDepartmentComparisonChart();
}

// Work Completion Pie Chart - Enhanced
function createWorkCompletionPieChart() {
    const ctx = document.getElementById('workCompletionChart');
    if (!ctx) return;
    
    const completed = userData.objectivesCompleted;
    const remaining = userData.totalObjectives - completed;
    
    workCompletionPieChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Completed Tasks', 'Remaining Tasks'],
            datasets: [{
                data: [completed, remaining],
                backgroundColor: [
                    '#22c55e', // Completed: green
                    '#fbbf24'  // Remaining: yellow/orange
                ],
                borderWidth: 4,
                borderColor: '#ffffff',
                cutout: '65%',
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 25,
                        font: { 
                            size: 14,
                            weight: '600',
                            family: 'Inter'
                        },
                        color: '#374151'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#38bdf8',
                    borderWidth: 2,
                    cornerRadius: 12,
                    padding: 16,
                    titleFont: { size: 16, weight: 'bold' },
                    bodyFont: { size: 14 },
                    callbacks: {
                        label: function(context) {
                            const percentage = ((context.parsed / userData.totalObjectives) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} (${percentage}%)`;
                        }
                    }
                }
            },
            layout: {
                padding: 20
            }
        }
    });
}

// Performance Distribution Pie Chart - Enhanced
function createPerformancePieChart() {
    const ctx = document.getElementById('performancePieChart');
    if (!ctx) return;
    
    performancePieChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Excellent (90+)', 'Good (70-89)', 'Average (50-69)', 'Below Average (<50)'],
            datasets: [{
                data: [85, 12, 3, 0],
                backgroundColor: [
                    '#22c55e',
                    '#38bdf8', 
                    '#fbbf24',
                    '#ef4444'
                ],
                borderWidth: 6,
                borderColor: '#ffffff',
                cutout: '50%',
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { 
                            size: 13,
                            weight: '600',
                            family: 'Inter'
                        },
                        color: '#374151'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#38bdf8',
                    borderWidth: 2,
                    cornerRadius: 12,
                    padding: 16,
                    titleFont: { size: 16, weight: 'bold' },
                    bodyFont: { size: 14 },
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            },
            layout: {
                padding: 15
            }
        }
    });
}

// Monthly Progress Bar Chart - Enhanced
function createMonthlyProgressChart() {
    const ctx = document.getElementById('monthlyProgressChart');
    if (!ctx) return;
    
    monthlyProgressChart = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Tasks Completed',
                data: [12, 15, 18, 22, 25, 28],
                backgroundColor: 'rgba(56, 189, 248, 0.8)',
                borderColor: '#38bdf8',
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
                hoverBackgroundColor: 'rgba(56, 189, 248, 0.9)'
            }, {
                label: 'PVS Score',
                data: [78, 82, 84, 86, 87, 87],
                type: 'line',
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#22c55e',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { size: 12, weight: '600' },
                        color: '#6b7280'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: { 
                        display: true, 
                        text: 'Tasks Completed',
                        font: { size: 14, weight: 'bold' },
                        color: '#374151'
                    },
                    grid: {
                        color: 'rgba(156, 163, 175, 0.2)'
                    },
                    ticks: {
                        font: { size: 11 },
                        color: '#6b7280'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: { 
                        display: true, 
                        text: 'PVS Score',
                        font: { size: 14, weight: 'bold' },
                        color: '#374151'
                    },
                    min: 70,
                    max: 100,
                    grid: { drawOnChartArea: false },
                    ticks: {
                        font: { size: 11 },
                        color: '#6b7280'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { 
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 13, weight: '600' }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#38bdf8',
                    borderWidth: 2,
                    cornerRadius: 12,
                    padding: 16
                }
            },
            layout: {
                padding: 10
            }
        }
    });
}

// Department Comparison Chart
function createDepartmentComparisonChart() {
    const ctx = document.getElementById('departmentChart');
    if (!ctx) return;
    
    departmentComparisonChart = new Chart(ctx.getContext('2d'), {
        type: 'radar',
        data: {
            labels: ['Efficiency', 'Quality', 'Timeliness', 'Innovation', 'Collaboration', 'Impact'],
            datasets: [{
                label: 'Your Performance',
                data: [87, 92, 85, 78, 90, 88],
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                borderColor: '#38bdf8',
                borderWidth: 2,
                pointBackgroundColor: '#38bdf8'
            }, {
                label: 'Department Average',
                data: [75, 78, 72, 68, 74, 76],
                backgroundColor: 'rgba(148, 163, 184, 0.1)',
                borderColor: '#94a3b8',
                borderWidth: 2,
                pointBackgroundColor: '#94a3b8'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { stepSize: 20 }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { usePointStyle: true }
                }
            }
        }
    });
}

// Update User Stats when objectives are completed
function updateUserStats() {
    const completedCount = objectivesData.filter(obj => obj.progress === 100).length;
    userData.objectivesCompleted = completedCount;
    
    // Update PVS based on completion
    const completionRate = completedCount / userData.totalObjectives;
    userData.pvs = Math.min(95, Math.round(75 + (completionRate * 20)));
    
    // Update CKP points
    userData.ckp += 50; // Bonus points for completion
    
    updateKPICards();
}

// Update Work Completion Display
function updateWorkCompletion() {
    const completedCount = objectivesData.filter(obj => obj.progress === 100).length;
    const completionRate = (completedCount / userData.totalObjectives * 100).toFixed(1);
    
    // Update completion percentage display
    const completionDisplay = document.getElementById('workCompletionDisplay');
    if (completionDisplay) {
        completionDisplay.innerHTML = `
            <div class="completion-stats">
                <h3>Work Completion Status</h3>
                <div class="completion-circle">
                    <svg width="120" height="120">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" stroke-width="8"/>
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#38bdf8" stroke-width="8" 
                                stroke-dasharray="${2 * Math.PI * 50}" 
                                stroke-dashoffset="${2 * Math.PI * 50 * (1 - completionRate/100)}"
                                transform="rotate(-90 60 60)" stroke-linecap="round"/>
                        <text x="60" y="65" text-anchor="middle" font-size="18" font-weight="bold" fill="#38bdf8">
                            ${completionRate}%
                        </text>
                    </svg>
                </div>
                <p>${completedCount} of ${userData.totalObjectives} objectives completed</p>
            </div>
        `;
    }
}

// Update All Charts
function updateAllCharts() {
    if (workCompletionPieChart) {
        const completed = userData.objectivesCompleted;
        const remaining = userData.totalObjectives - completed;
        workCompletionPieChart.data.datasets[0].data = [completed, remaining];
        workCompletionPieChart.update();
    }
    
    if (performanceChart) {
        // Add new data point to performance trend
        performanceChart.data.datasets[0].data.push(userData.pvs);
        if (performanceChart.data.datasets[0].data.length > 12) {
            performanceChart.data.datasets[0].data.shift();
        }
        performanceChart.update();
    }
    
    updateWorkCompletion();
}

// Show Success Notification
function showSuccessNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 4000);
}

// Enhanced Complete Objective Function with notifications
function completeObjectiveWithNotification(index) {
    if (objectivesData[index].progress < 100) {
        const objectiveTitle = objectivesData[index].title;
        objectivesData[index].progress = 100;
        
        updateUserStats();
        showCelebration(objectivesData[index]);
        loadObjectives();
        updateWorkCompletion();
        updateAllCharts();
        
        // Show success notification
        showSuccessNotification(`🎉 Objective "${objectiveTitle}" completed! +50 CKP points earned!`);
        
        // Update chatbot FAQ dynamically
        updateChatbotStats();
    }
}

// Animated Counter System for Impact Metrics
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        if (element.classList.contains('counter-money')) {
            element.textContent = `₹${(current / 10000000).toFixed(1)}Cr`;
        } else if (element.classList.contains('counter-large')) {
            element.textContent = `${(current / 1000).toFixed(0)}K+`;
        } else if (element.classList.contains('counter-days')) {
            element.textContent = `${current} days`;
        } else if (element.classList.contains('counter-percent')) {
            element.textContent = `${current}%`;
        } else {
            element.textContent = current.toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
}

// Initialize impact counters on page load
function initializeImpactCounters() {
    const impactData = getImpactData();
    
    // Animate counters when they come into view
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const counter = entry.target.querySelector('.counter-value');
                if (counter) {
                    const targetValue = parseInt(counter.dataset.target);
                    animateCounter(counter, 0, targetValue, 2000);
                }
            }
        });
    }, observerOptions);
    
    // Observe all counter containers
    document.querySelectorAll('.impact-stat').forEach(stat => {
        observer.observe(stat);
    });
    
    document.querySelectorAll('.real-impact-item').forEach(item => {
        observer.observe(item);
    });
}

// Get current impact data (updates dynamically based on completed objectives)
function getImpactData() {
    const completedObjectives = getCompletedObjectivesCount();
    const baseImpact = {
        citizensHelped: 245000,
        moneySaved: 125000000, // 12.5 crores in rupees
        timeSaved: 45,
        sustainabilityScore: 92
    };
    
    // Increase impact based on completed objectives
    const impactMultiplier = 1 + (completedObjectives * 0.1);
    
    return {
        citizensHelped: Math.floor(baseImpact.citizensHelped * impactMultiplier),
        moneySaved: Math.floor(baseImpact.moneySaved * impactMultiplier),
        timeSaved: Math.floor(baseImpact.timeSaved * impactMultiplier),
        sustainabilityScore: Math.min(100, Math.floor(baseImpact.sustainabilityScore * impactMultiplier))
    };
}

// Update impact counters when objectives are completed
function updateImpactCounters() {
    const impactData = getImpactData();
    
    // Update dashboard impact tracker
    const citizenCounter = document.querySelector('.impact-tracker #citizensImpacted');
    const moneyCounter = document.querySelector('.impact-tracker #moneySaved');
    const timeCounter = document.querySelector('.impact-tracker #timeReduced');
    const sustainabilityCounter = document.querySelector('.impact-tracker #sustainabilityScore');

    if (citizenCounter) {
        animateCounter(citizenCounter, 0, impactData.citizensHelped, 1500);
    }
    if (moneyCounter) {
        animateCounter(moneyCounter, 0, impactData.moneySaved, 1500);
    }
    if (timeCounter) {
        animateCounter(timeCounter, 0, impactData.timeSaved, 1500);
    }
    if (sustainabilityCounter) {
        animateCounter(sustainabilityCounter, 0, impactData.sustainabilityScore, 1500);
    }
    // Update homepage counters (if any)
    const homeCounters = document.querySelectorAll('.real-impact-item .counter-value');
    homeCounters.forEach(counter => {
        const targetValue = parseInt(counter.dataset.target);
        animateCounter(counter, 0, targetValue, 2000);
    });
}

// ========== SIH ADVANCED FEATURES: FEEDBACK, MISSION MAP, JUDGE DEMO ========== //

// --- Mission Map Visualization ---
const missionObjectives = [
    { title: "Clean Water Access", done: true },
    { title: "Digital Literacy", done: true },
    { title: "Women Safety", done: false },
    { title: "Waste Management", done: false },
    { title: "Financial Inclusion", done: false },
];
function renderMissionMap() {
    const bar = document.getElementById('missionMapProgress');
    const label = document.getElementById('missionMapLabel');
    const list = document.getElementById('missionMapObjectives');
    if (!bar || !label || !list) return;
    const completed = missionObjectives.filter(o => o.done).length;
    const percent = Math.round((completed / missionObjectives.length) * 100);
    bar.style.width = percent + '%';
    label.textContent = percent + '% Complete';
    list.innerHTML = missionObjectives.map(obj =>
        `<li style="display:flex;align-items:center;gap:6px;font-weight:600;">
            <span style="color:${obj.done ? '#22c55e' : '#64748b'};font-size:1.2em;">
                <i class="fas fa-${obj.done ? 'check-circle' : 'circle'}"></i>
            </span>${obj.title}
        </li>`
    ).join('');
}

// --- Citizen Feedback Loop (Home Page) ---
let citizenFeedbacks = [];
function renderCitizenFeedbacks() {
    const list = document.getElementById('citizenFeedbackList');
    if (!list) return;
    if (citizenFeedbacks.length === 0) {
        list.innerHTML = '<div style="color:#64748b;padding:12px 0;">No feedback yet. Be the first to share your thoughts!</div>';
        return;
    }
    list.innerHTML = citizenFeedbacks.slice().reverse().map(fb =>
        `<div style="background:#f1f5f9;padding:14px 16px;border-radius:10px;margin-bottom:10px;box-shadow:0 1px 4px 0 rgba(56,189,248,0.07);">
            <div style="font-weight:700;color:#38bdf8;font-size:1.08em;">${fb.name || 'Anonymous'}</div>
            <div style="color:#334155;margin:4px 0 2px 0;">${fb.text}</div>
            <div style="font-size:0.92em;color:#64748b;">${fb.time}</div>
        </div>`
    ).join('');
}
function handleCitizenFeedbackSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('citizenName').value.trim();
    const text = document.getElementById('citizenFeedback').value.trim();
    if (!text) return;
    const now = new Date();
    citizenFeedbacks.push({
        name,
        text,
        time: now.toLocaleString()
    });
    document.getElementById('citizenFeedbackForm').reset();
    renderCitizenFeedbacks();
    // Show a hit effect/animation
    const btn = document.querySelector('#citizenFeedbackForm button[type="submit"]');
    if (btn) {
        btn.classList.add('btn-hit');
        setTimeout(()=>btn.classList.remove('btn-hit'), 400);
    }
    if (typeof showNotification === 'function') showNotification('Thank you for your feedback!');
}

// --- Judge Demo Mode ---
let judgeDemoMode = false;
function setJudgeDemoMode(on) {
    judgeDemoMode = on;
    const banner = document.getElementById('judgeDemoBanner');
    const btn = document.getElementById('judgeDemoToggle');
    if (banner && btn) {
        banner.style.display = on ? 'block' : 'none';
        btn.textContent = on ? 'Disable Judge Demo Mode' : 'Enable Judge Demo Mode';
    }
    // Demo: unlock all objectives, add demo feedbacks
    if (on) {
        missionObjectives.forEach(o => o.done = true);
        citizenFeedbacks = [
            { name: 'Demo User', text: 'Amazing initiative! Keep it up.', time: '2024-06-01 10:00' },
            { name: 'SIH Judge', text: 'Impressive feedback system and mission map.', time: '2024-06-01 10:05' }
        ];
    } else {
        missionObjectives[0].done = true;
        missionObjectives[1].done = true;
        missionObjectives[2].done = false;
        missionObjectives[3].done = false;
        missionObjectives[4].done = false;
        citizenFeedbacks = [];
    }
    renderMissionMap();
    renderCitizenFeedbacks();
}

// ========== ADVANCED FUNCTIONAL FEATURES ========== //

// --- Voice Assistant Integration ---
let voiceRecognition = null;
let isVoiceActive = false;

function initVoiceAssistant() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        voiceRecognition = new SpeechRecognition();
        voiceRecognition.continuous = false;
        voiceRecognition.interimResults = false;
        voiceRecognition.lang = 'en-US';
        
        voiceRecognition.onstart = () => {
            isVoiceActive = true;
            updateVoiceStatus('🎤 Listening...');
        };
        
        voiceRecognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            handleVoiceInput(transcript);
        };
        
        voiceRecognition.onend = () => {
            isVoiceActive = false;
            updateVoiceStatus('Click to start voice chat');
        };
        
        voiceRecognition.onerror = (event) => {
            updateVoiceStatus('Voice not available');
        };
    }
}

function updateVoiceStatus(message) {
    const status = document.getElementById('voiceStatus');
    if (status) status.textContent = message;
}

function handleVoiceInput(transcript) {
    updateVoiceStatus(`You said: "${transcript}"`);
    
    // Process voice input through chatbot
    const response = getAdvancedLocalAI(transcript);
    
    // Speak the response
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(response);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    }
    
    // Show in chatbot if open
    const chatBody = document.querySelector('#chatbotBody');
    if (chatBody) {
        const userBubble = document.createElement('div');
        userBubble.className = 'chatbot-message user';
        userBubble.textContent = `🎤 ${transcript}`;
        chatBody.appendChild(userBubble);
        
        const botBubble = document.createElement('div');
        botBubble.className = 'chatbot-message bot';
        botBubble.textContent = response;
        chatBody.appendChild(botBubble);
        
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// --- Data Export Functionality ---
function exportToPDF() {
    const data = gatherPerformanceData();
    const content = `
    KARMAYOGI PATH - PERFORMANCE REPORT
    
    Officer: Vaishnavi Gupta
    Department: Ministry of Electronics and IT
    Position: Section Officer
    
    PERFORMANCE METRICS:
    • Public Value Score (PVS): ${data.pvs}
    • Competency Karma Points (CKP): ${data.ckp}
    • Objectives Completed: ${data.completedObjectives}/${data.totalObjectives}
    • Completion Rate: ${data.completionRate}%
    
    IMPACT METRICS:
    • Citizens Helped: ${data.citizensHelped.toLocaleString()}
    • Money Saved: ₹${(data.moneySaved/10000000).toFixed(1)} Crores
    • Time Reduced: ${data.timeReduced} days
    • Sustainability Score: ${data.sustainabilityScore}%
    
    Generated on: ${new Date().toLocaleDateString()}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    downloadFile(blob, 'karmayogi-performance-report.txt');
    showNotification('📄 PDF Report Generated!');
}

function exportToCSV() {
    const data = gatherPerformanceData();
    const csvContent = `
Metric,Value
PVS Score,${data.pvs}
CKP Points,${data.ckp}
Completed Objectives,${data.completedObjectives}
Total Objectives,${data.totalObjectives}
Completion Rate,${data.completionRate}%
Citizens Helped,${data.citizensHelped}
Money Saved (Crores),${(data.moneySaved/10000000).toFixed(1)}
Time Reduced (Days),${data.timeReduced}
Sustainability Score,${data.sustainabilityScore}%
    `.trim();
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    downloadFile(blob, 'karmayogi-data.csv');
    showNotification('📊 CSV Data Exported!');
}

function exportToJSON() {
    const data = gatherPerformanceData();
    const jsonContent = JSON.stringify(data, null, 2);
    
    const blob = new Blob([jsonContent], { type: 'application/json' });
    downloadFile(blob, 'karmayogi-data.json');
    showNotification('💾 JSON Data Exported!');
}

function gatherPerformanceData() {
    return {
        officer: "Vaishnavi Gupta",
        department: "Ministry of Electronics and IT",
        position: "Section Officer",
        pvs: 87,
        ckp: 1245,
        completedObjectives: 6,
        totalObjectives: 8,
        completionRate: 75,
        citizensHelped: 245000,
        moneySaved: 125000000,
        timeReduced: 45,
        sustainabilityScore: 92,
        generatedOn: new Date().toISOString()
    };
}

function downloadFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// --- Smart Reminders & Live Notifications System ---
let reminderEnabled = false;
let notificationsPaused = false;
let liveNotifications = [];
let notificationTimer = null;

const upcomingDeadlines = [
    { task: "Digital Literacy Training", deadline: "2024-09-30", priority: "high" },
    { task: "API Security Guidelines", deadline: "2024-10-15", priority: "medium" },
    { task: "Citizen Feedback System", deadline: "2024-10-20", priority: "high" },
    { task: "Performance Review", deadline: "2024-10-25", priority: "low" }
];

const timeBasedNotifications = [
    { time: "09:00", message: "🌅 Good morning! Ready to create positive impact today?", type: "motivation" },
    { time: "12:00", message: "⚡ Midday check: You're doing great! Keep up the momentum!", type: "motivation" },
    { time: "15:00", message: "📊 Afternoon update: Your PVS score is trending upward!", type: "performance" },
    { time: "17:00", message: "🎯 End of day: Review your completed objectives!", type: "reminder" },
    { time: "10:30", message: "💡 Tip: Focus on high-priority objectives for maximum impact!", type: "tip" },
    { time: "14:30", message: "👥 Don't forget to collaborate with your team members!", type: "collaboration" },
    { time: "16:00", message: "📈 Your citizen impact score increased by 2.5% today!", type: "achievement" }
];

function toggleReminders() {
    reminderEnabled = !reminderEnabled;
    const btn = document.getElementById('reminderToggle');
    if (btn) {
        btn.innerHTML = reminderEnabled 
            ? '<i class="fas fa-bell-slash"></i> Disable Reminders'
            : '<i class="fas fa-bell"></i> Enable Reminders';
    }
    
    if (reminderEnabled) {
        scheduleReminders();
        startLiveNotifications();
        addLiveNotification('🔔 Smart Reminders & Live Notifications Activated!', 'system');
    } else {
        stopLiveNotifications();
        addLiveNotification('🔕 Reminders Disabled', 'system');
    }
}

function scheduleReminders() {
    upcomingDeadlines.forEach(item => {
        const deadline = new Date(item.deadline);
        const today = new Date();
        const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        
        if (daysLeft <= 7 && daysLeft > 0) {
            setTimeout(() => {
                const priorityIcon = item.priority === 'high' ? '🚨' : item.priority === 'medium' ? '⚠️' : 'ℹ️';
                addLiveNotification(`${priorityIcon} "${item.task}" due in ${daysLeft} days!`, 'deadline');
            }, Math.random() * 5000 + 2000); // Random delay 2-7 seconds
        }
    });
}

function startLiveNotifications() {
    if (notificationTimer) clearInterval(notificationTimer);
    
    // Send notifications every 2-5 minutes randomly
    notificationTimer = setInterval(() => {
        if (!notificationsPaused && reminderEnabled) {
            sendRandomNotification();
        }
    }, Math.random() * 180000 + 120000); // 2-5 minutes
    
    // Also schedule time-based notifications
    scheduleTimeBasedNotifications();
}

function stopLiveNotifications() {
    if (notificationTimer) {
        clearInterval(notificationTimer);
        notificationTimer = null;
    }
}

function scheduleTimeBasedNotifications() {
    timeBasedNotifications.forEach(notification => {
        const [hour, minute] = notification.time.split(':').map(Number);
        const now = new Date();
        const notificationTime = new Date();
        notificationTime.setHours(hour, minute, 0, 0);
        
        // If time has passed today, schedule for tomorrow
        if (notificationTime <= now) {
            notificationTime.setDate(notificationTime.getDate() + 1);
        }
        
        const timeUntilNotification = notificationTime - now;
        
        setTimeout(() => {
            if (reminderEnabled && !notificationsPaused) {
                addLiveNotification(notification.message, notification.type);
            }
        }, timeUntilNotification);
    });
}

function sendRandomNotification() {
    const randomNotifications = [
        { msg: "💪 You've helped 15 more citizens today!", type: "achievement" },
        { msg: "🎯 Your PVS score increased by 0.5 points!", type: "performance" },
        { msg: "⚡ Team collaboration opportunity available!", type: "collaboration" },
        { msg: "📊 Weekly performance summary is ready!", type: "report" },
        { msg: "🌟 You're in the top 20% performers this month!", type: "achievement" },
        { msg: "💡 Tip: Review your pending objectives!", type: "tip" },
        { msg: "🔔 New government directive available!", type: "update" },
        { msg: "📈 Your citizen satisfaction score: 94%!", type: "performance" }
    ];
    
    const randomIndex = Math.floor(Math.random() * randomNotifications.length);
    const notification = randomNotifications[randomIndex];
    addLiveNotification(notification.msg, notification.type);
}

function addLiveNotification(message, type) {
    const timestamp = new Date().toLocaleTimeString();
    const notification = {
        id: Date.now(),
        message,
        type,
        timestamp,
        time: new Date()
    };
    
    liveNotifications.unshift(notification); // Add to beginning
    
    // Keep only last 20 notifications
    if (liveNotifications.length > 20) {
        liveNotifications = liveNotifications.slice(0, 20);
    }
    
    renderLiveNotifications();
    
    // Also show as toast notification
    showNotification(message);
}

function renderLiveNotifications() {
    const container = document.getElementById('notificationList');
    const badge = document.getElementById('notificationBadge');
    
    // Update notification badge count
    if (badge) {
        badge.textContent = liveNotifications.length;
        badge.style.display = liveNotifications.length > 0 ? 'flex' : 'none';
    }
    
    if (!container) return;
    
    if (liveNotifications.length === 0) {
        container.innerHTML = '<div style="color:#64748b;text-align:center;padding:20px;font-size:0.9em;">No notifications yet. Enable reminders to start!</div>';
        return;
    }
    
    const getTypeIcon = (type) => {
        const icons = {
            system: '⚙️',
            deadline: '⏰',
            motivation: '🌟',
            performance: '📊',
            achievement: '🏆',
            collaboration: '👥',
            tip: '💡',
            report: '📋',
            update: '📢'
        };
        return icons[type] || '📢';
    };
    
    const getTypeColor = (type) => {
        const colors = {
            system: '#64748b',
            deadline: '#ef4444',
            motivation: '#f59e0b',
            performance: '#3b82f6',
            achievement: '#10b981',
            collaboration: '#8b5cf6',
            tip: '#06b6d4',
            report: '#84cc16',
            update: '#f97316'
        };
        return colors[type] || '#64748b';
    };
    
    container.innerHTML = liveNotifications.map(notif => `
        <div style="background:#f8fafc;border-left:3px solid ${getTypeColor(notif.type)};padding:12px 14px;margin-bottom:6px;border-radius:0 6px 6px 0;transition:background 0.2s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#f8fafc'">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                <span style="font-size:1.1em;">${getTypeIcon(notif.type)}</span>
                <span style="font-size:0.8em;color:#64748b;">${notif.timestamp}</span>
            </div>
            <div style="color:#334155;font-size:0.9em;line-height:1.4;">${notif.message}</div>
        </div>
    `).join('');
}

function clearAllNotifications() {
    liveNotifications = [];
    renderLiveNotifications();
    showNotification('🗑️ All notifications cleared!');
}

function toggleNotificationsPause() {
    notificationsPaused = !notificationsPaused;
    const btn = document.getElementById('pauseNotifications');
    const btnMini = document.getElementById('pauseNotificationsMini');
    
    const newHTML = notificationsPaused 
        ? '<i class="fas fa-play"></i> Resume'
        : '<i class="fas fa-pause"></i> Pause';
    
    const newMiniHTML = notificationsPaused 
        ? '<i class="fas fa-play"></i>'
        : '<i class="fas fa-pause"></i>';
    
    if (btn) btn.innerHTML = newHTML;
    if (btnMini) btnMini.innerHTML = newMiniHTML;
    
    addLiveNotification(
        notificationsPaused ? '⏸️ Notifications paused' : '▶️ Notifications resumed', 
        'system'
    );
}

// Notification Bell Toggle Functionality
function toggleNotificationDropdown() {
    const dropdown = document.getElementById('notificationDropdown');
    const bell = document.getElementById('notificationBell');
    
    if (dropdown && bell) {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
        
        // Add active state to bell
        if (isVisible) {
            bell.style.background = 'none';
            bell.style.color = '#64748b';
        } else {
            bell.style.background = '#f1f5f9';
            bell.style.color = '#3b82f6';
        }
    }
}

// Close dropdown when clicking outside
function handleClickOutside(event) {
    const dropdown = document.getElementById('notificationDropdown');
    const bell = document.getElementById('notificationBell');
    
    if (dropdown && bell && dropdown.style.display === 'block') {
        if (!dropdown.contains(event.target) && !bell.contains(event.target)) {
            dropdown.style.display = 'none';
            bell.style.background = 'none';
            bell.style.color = '#64748b';
        }
    }
}

// --- Performance Prediction AI ---
function generatePerformancePrediction() {
    const currentPVS = 87;
    const trend = 0.8; // Monthly improvement rate
    const predictedPVS = Math.min(100, Math.round(currentPVS + trend * 4)); // 4 weeks prediction
    
    const prediction = {
        nextMonthPVS: predictedPVS,
        confidence: 85,
        recommendation: predictedPVS > 90 ? "Maintain current pace!" : "Focus on high-priority objectives",
        trend: "Upward",
        factors: ["Consistent objective completion", "Strong team collaboration", "Positive citizen impact"]
    };
    
    displayPrediction(prediction);
    showNotification('🔮 AI Prediction Generated!');
}

function displayPrediction(prediction) {
    const result = document.getElementById('predictionResult');
    if (result) {
        result.innerHTML = `
            <strong>Next Month PVS: ${prediction.nextMonthPVS}</strong><br>
            Confidence: ${prediction.confidence}%<br>
            Trend: ${prediction.trend} 📈
        `;
    }
}

// --- INIT for new features ---
window.addEventListener('DOMContentLoaded', () => {
    // Mission Map
    renderMissionMap();
    // Citizen Feedback (now on home page)
    const fbForm = document.getElementById('citizenFeedbackForm');
    if (fbForm) fbForm.onsubmit = handleCitizenFeedbackSubmit;
    renderCitizenFeedbacks();
    // Judge Demo
    const judgeBtn = document.getElementById('judgeDemoToggle');
    if (judgeBtn) judgeBtn.onclick = () => setJudgeDemoMode(!judgeDemoMode);
    
    // Advanced Features Initialization
    initVoiceAssistant();
    
    // Event Listeners for Advanced Features
    const voiceBtn = document.getElementById('voiceButton');
    if (voiceBtn) {
        voiceBtn.onclick = () => {
            if (voiceRecognition && !isVoiceActive) {
                voiceRecognition.start();
            }
        };
    }
    
    const exportPDFBtn = document.getElementById('exportPDF');
    if (exportPDFBtn) exportPDFBtn.onclick = exportToPDF;
    
    const exportCSVBtn = document.getElementById('exportCSV');
    if (exportCSVBtn) exportCSVBtn.onclick = exportToCSV;
    
    const exportJSONBtn = document.getElementById('exportJSON');
    if (exportJSONBtn) exportJSONBtn.onclick = exportToJSON;
    
    const reminderBtn = document.getElementById('reminderToggle');
    if (reminderBtn) reminderBtn.onclick = toggleReminders;
    
    const predictionBtn = document.getElementById('predictionButton');
    if (predictionBtn) predictionBtn.onclick = generatePerformancePrediction;
    
    // Notification Bell Controls
    const notificationBell = document.getElementById('notificationBell');
    if (notificationBell) {
        notificationBell.onclick = toggleNotificationDropdown;
        
        // Add hover effects
        notificationBell.onmouseover = () => {
            if (notificationBell.style.background !== '#f1f5f9') {
                notificationBell.style.background = '#f8fafc';
                notificationBell.style.color = '#3b82f6';
            }
        };
        notificationBell.onmouseout = () => {
            if (document.getElementById('notificationDropdown').style.display !== 'block') {
                notificationBell.style.background = 'none';
                notificationBell.style.color = '#64748b';
            }
        };
    }
    
    // Mini notification controls in dropdown
    const clearNotifBtnMini = document.getElementById('clearNotificationsMini');
    if (clearNotifBtnMini) clearNotifBtnMini.onclick = clearAllNotifications;
    
    const pauseNotifBtnMini = document.getElementById('pauseNotificationsMini');
    if (pauseNotifBtnMini) pauseNotifBtnMini.onclick = toggleNotificationsPause;
    
    // Click outside to close dropdown
    document.addEventListener('click', handleClickOutside);
    
    // Initialize voice status
    updateVoiceStatus('Click to start voice chat');
    
    // Initialize live notifications
    renderLiveNotifications();
    
    // Initialize theme-aware charts
    updateChartsForTheme();
    
    // Start with a welcome notification
    setTimeout(() => {
        addLiveNotification('🎉 Welcome to your Advanced Dashboard! All systems ready.', 'system');
    }, 1000);
});