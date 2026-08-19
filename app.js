// ==========================================================================
// Meraksandık — Modern Araştırma Uygulaması
// ==========================================================================

const TOPICS = [
  { tr: "Parkinson Yasası", en: "Parkinson's Law" },
  { tr: "Beş Neden", en: "The Five Whys" },
  { tr: "Feynman Tekniği", en: "The Feynman Technique" },
  { tr: "İki Pizza Kuralı", en: "The Two-Pizza Rule" },
  { tr: "Yenilikçinin İkilemi", en: "The Innovator's Dilemma" },
  { tr: "İlk Prensiplerle Düşünme", en: "First Principles Thinking" },
  { tr: "Ağ Etkisi", en: "The Network Effect" },
  { tr: "Minimum Uygulanabilir Ürün", en: "Minimum Viable Product" },
  { tr: "Kurucu-Pazar Uyumu", en: "Founder-Market Fit" },
  { tr: "Hanlon Usturası", en: "Hanlon's Razor" },
  { tr: "Dunbar Sayısı", en: "Dunbar's Number" },
  { tr: "Hayatta Kalan Yanlılığı", en: "Survivorship Bias" },
  { tr: "Doğal Karar Verme", en: "Naturalistic Decision Making" },
  { tr: "Derin Çalışma", en: "Deep Work" },
  { tr: "Seinfeld Stratejisi", en: "The Seinfeld Strategy" },
  { tr: "Pomodoro Tekniği", en: "The Pomodoro Technique" },
  { tr: "Planlama Yanılgısı", en: "The Planning Fallacy" },
  { tr: "IKEA Etkisi", en: "The IKEA Effect" },
  { tr: "Kırık Camlar Teorisi", en: "Broken Windows Theory" },
  { tr: "Streisand Etkisi", en: "The Streisand Effect" },
  { tr: "Güç Yasası", en: "The Power Law" },
  { tr: "Ortalamaya Dönüş", en: "Regression to the Mean" },
  { tr: "Overton Penceresi", en: "The Overton Window" },
  { tr: "Peter Prensibi", en: "The Peter Principle" },
  { tr: "Otobüs Faktörü", en: "The Bus Factor" },
  { tr: "Kobra Etkisi", en: "The Cobra Effect" },
  { tr: "Hawthorne Etkisi", en: "The Hawthorne Effect" },
  { tr: "Antikırılganlık", en: "Antifragility" },
  { tr: "Oyunda Derisi Olmak", en: "Skin in the Game" },
  { tr: "Tersine Düşünme", en: "Inversion" },
  { tr: "İkinci Derece Düşünme", en: "Second-Order Thinking" },
  { tr: "Fermi Tahmini", en: "Fermi Estimation" },
  { tr: "Yetkinlik Çemberi", en: "Circle of Competence" },
  { tr: "Karar Yorgunluğu", en: "Decision Fatigue" },
  { tr: "Seçim Paradoksu", en: "The Paradox of Choice" },
  { tr: "Büyüme Zihniyeti", en: "Growth Mindset" },
  { tr: "Uygulama Niyetleri", en: "Implementation Intentions" },
  { tr: "Alışkanlık Döngüsü", en: "The Habit Loop" },
  { tr: "Kızıl Kraliçe Etkisi", en: "The Red Queen Effect" },
  { tr: "Patika Bağımlılığı", en: "Path Dependence" },
  { tr: "Ergodiklik", en: "Ergodicity" },
  { tr: "Lindy Etkisi", en: "The Lindy Effect" },
  { tr: "Opsiyonellik", en: "Optionality" },
  { tr: "Vekalet Problemi", en: "The Principal-Agent Problem" },
  { tr: "Bilgi Laneti", en: "The Curse of Knowledge" },
  { tr: "Yanıltıcı Doğruluk Etkisi", en: "The Illusory Truth Effect" },
  { tr: "Diş Fırçası Testi", en: "The Toothbrush Test" },
  { tr: "Yak Tıraşı", en: "Yak Shaving" },
  { tr: "Hindi Problemi", en: "The Turkey Problem" },
  { tr: "İkarus Paradoksu", en: "The Icarus Paradox" },
  { tr: "Zihinsel Muhasebe", en: "Mental Accounting" },
  { tr: "Cynefin Çerçevesi", en: "The Cynefin Framework" },
  { tr: "Eisenhower Matrisi", en: "The Eisenhower Matrix" },
  { tr: "OODA Döngüsü", en: "The OODA Loop" },
  { tr: "Gall Yasası", en: "Gall's Law" },
  { tr: "Hofstadter Yasası", en: "Hofstadter's Law" },
  { tr: "Shirky İlkesi", en: "The Shirky Principle" },
  { tr: "Brandolini Yasası", en: "Brandolini's Law" },
  { tr: "Betteridge Yasası", en: "Betteridge's Law of Headlines" },
  { tr: "Sturgeon Yasası", en: "Sturgeon's Law" },
  { tr: "Amara Yasası", en: "Amara's Law" },
  { tr: "Campbell Yasası", en: "Campbell's Law" },
  { tr: "Littlewood Yasası", en: "Littlewood's Law" },
  { tr: "Bisiklet Barakası Etkisi", en: "Bikeshedding (Law of Triviality)" },
  { tr: "Nirvana Yanılgısı", en: "The Nirvana Fallacy" },
  { tr: "Hazırlık Paradoksu", en: "The Preparedness Paradox" },
  { tr: "Abilene Paradoksu", en: "The Abilene Paradox" },
  { tr: "Braess Paradoksu", en: "Braess's Paradox" },
  { tr: "Jevons Paradoksu", en: "The Jevons Paradox" },
  { tr: "Gartner Abartı Döngüsü", en: "The Gartner Hype Cycle" },
  { tr: "Wardley Haritalama", en: "Wardley Mapping" },
  { tr: "Yapılacak İş Kuramı", en: "Jobs to Be Done" },
  { tr: "Kano Modeli", en: "The Kano Model" },
  { tr: "Ansoff Matrisi", en: "The Ansoff Matrix" },
  { tr: "Volan Etkisi", en: "The Flywheel Effect" },
  { tr: "Kamçı Etkisi", en: "The Bullwhip Effect" },
  { tr: "Kaizen", en: "Kaizen (Continuous Improvement)" },
  { tr: "Kısıtlar Teorisi", en: "The Theory of Constraints" },
  { tr: "Little Yasası", en: "Little's Law" },
  { tr: "Ashby Gerekli Çeşitlilik Yasası", en: "Ashby's Law of Requisite Variety" },
  { tr: "Sapmanın Normalleşmesi", en: "Normalization of Deviance" },
  { tr: "İsviçre Peyniri Modeli", en: "The Swiss Cheese Model" },
  { tr: "Sınırlı Rasyonellik", en: "Bounded Rationality" },
  { tr: "Tatmin Arayışı", en: "Satisficing" },
  { tr: "Erişilebilirlik Sezgiseli", en: "The Availability Heuristic" },
  { tr: "Odaklanma Yanılsaması", en: "The Focusing Illusion" },
  { tr: "Spot Işığı Etkisi", en: "The Spotlight Effect" },
  { tr: "Ben Franklin Etkisi", en: "The Ben Franklin Effect" },
  { tr: "Diderot Etkisi", en: "The Diderot Effect" },
  { tr: "Peltzman Etkisi", en: "The Peltzman Effect" },
  { tr: "Via Negativa", en: "Via Negativa" },
  { tr: "Şoför Bilgisi", en: "Chauffeur Knowledge" },
  { tr: "Ölüm Öncesi Analiz", en: "The Pre-Mortem" },
  { tr: "Hitchens Usturası", en: "Hitchens's Razor" },
  { tr: "Anlatı Yanılgısı", en: "The Narrative Fallacy" },
  { tr: "Korkuluk Safsatası", en: "The Straw Man Fallacy" },
  { tr: "Kırmızı Ringa Safsatası", en: "The Red Herring Fallacy" },
  { tr: "Dilbert İlkesi", en: "The Dilbert Principle" },
  { tr: "Kritik Yol Yöntemi", en: "The Critical Path Method" },
  { tr: "Kırmızı Takım", en: "Red Teaming" },
  { tr: "Salam Taktiği", en: "Salami Tactics" },
  { tr: "Gerekçelendirme Merdiveni", en: "The Ladder of Inference" },
  { tr: "Beklenmedik Sonuçlar Yasası", en: "The Law of Unintended Consequences" }
];

const CATEGORIES = [
  {
    id: "general",
    tr: "Genel",
    en: "General",
    icon: '<circle cx="12" cy="12" r="8"/><path d="M15.2 8.8l-2.3 5.1-5.1 2.3 2.3-5.1 5.1-2.3z"/><circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none"/>'
  },
  {
    id: "technology",
    tr: "Teknoloji",
    en: "Technology",
    icon: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 7V4M15 7V4M9 20v-3M15 20v-3M7 9H4M7 15H4M20 9h-3M20 15h-3"/>'
  },
  {
    id: "science",
    tr: "Bilim",
    en: "Science",
    icon: '<path d="M10 3h4M10 3v5.2L5.6 16c-.9 1.6.3 3.5 2.1 3.5h8.6c1.8 0 3-1.9 2.1-3.5L14 8.2V3"/><path d="M8.3 14h7.4"/>'
  },
  {
    id: "philosophy",
    tr: "Felsefe",
    en: "Philosophy",
    icon: '<path d="M20 4c-6.2.9-11.3 6-13.3 13.2L4.6 20l2.9-2c6.9-.9 11.7-5.9 12.6-12.9 0-.4-.5-1.1-1.1-1.1z"/><path d="M9.2 14.8L5 19"/>'
  },
  {
    id: "psychology",
    tr: "Psikoloji",
    en: "Psychology",
    icon: '<path d="M9.3 4.2c-2.4 0-3.9 2-3.6 4.1C4.1 8.9 3.4 10.4 4.1 11.5c-.7 1.2 0 2.7 1.2 3.2-.2 1.3.7 2.6 2.2 2.8.2 1.4 1.7 2.4 3.1 1.9.6.4 1.5.4 2.1 0 1.4.5 2.9-.5 3.1-1.9 1.5-.2 2.4-1.5 2.2-2.8 1.2-.5 1.9-2 1.2-3.2.7-1.1 0-2.6-1.2-3.2.3-2.1-1.4-4-3.7-3.9-.9 0-1.6.4-2.1 1-.7-.6-1.6-1-2.6-1z"/><path d="M12 4.2v13"/>'
  },
  {
    id: "history",
    tr: "Tarih",
    en: "History",
    icon: '<path d="M6 3h12M6 21h12M7 3c0 5 4 6 5 9-1 3-5 4-5 9M17 3c0 5-4 6-5 9 1 3 5 4 5 9"/>'
  },
  {
    id: "economy",
    tr: "Ekonomi",
    en: "Economy",
    icon: '<path d="M5 20V14M10.5 20V10M16 20V13M21 20V6"/>'
  },
  {
    id: "advertising",
    tr: "Pazarlama & Reklam",
    en: "Advertising",
    icon: '<path d="M3 10.2v3.6h3l6.2 4V6.2l-6.2 4H3z"/><path d="M13.5 8.3c1.7.9 1.7 6.5 0 7.4M17.3 5.8c2.9 1.8 2.9 10.6 0 12.4"/>'
  },
  {
    id: "art",
    tr: "Sanat",
    en: "Art",
    icon: '<path d="M12 3C6.5 3 3 6.8 3 11c0 3 2 5 5 5h1.2c.7 0 1.3.6 1.3 1.3 0 .5-.2.9-.5 1.2-.4.4-.6.9-.6 1.5 0 1.1 1 2 2.6 2 5 0 9-4.5 9-10C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>'
  },
  {
    id: "law",
    tr: "Hukuk",
    en: "Law",
    icon: '<path d="M14 3l4 4-2.4 2.4-4-4L14 3z"/><path d="M12.4 7.6L3.8 16.2"/><path d="M3 21h7.5"/><path d="M6.3 17.5l3.2 3.2"/>'
  },
  {
    id: "astronomy",
    tr: "Astronomi",
    en: "Astronomy",
    icon: '<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="9.5" ry="3" transform="rotate(-20 12 12)"/>'
  },
  {
    id: "mathematics",
    tr: "Matematik",
    en: "Mathematics",
    icon: '<path d="M12 3v3"/><path d="M12 6L6 20"/><path d="M12 6l6 14"/><path d="M9 14h6"/>'
  },
  {
    id: "health",
    tr: "Sağlık & Biyoloji",
    en: "Health",
    icon: '<path d="M3 12h3.5l1.8-6 3 12 2.2-9 1.5 3H21"/>'
  }
];

const SETTINGS_KEY = "offscript-settings-v1";
const HISTORY_KEY = "offscript-history-v1";
const SESSION_KEY = "offscript-session-v1";
const REVIEW_AFTER_MS = 7 * 24 * 60 * 60 * 1000; // 7 gün sonra tekrar hatırlatıcısı

// ---------- İlham & Merak Alıntıları (Günün Parşömeni) ----------
const CURIOSITY_QUOTES = [
  { text: "Öğrenmeyi bıraktığın gün yaşlanmaya başlarsın; merak, ruhun gençlik pınarıdır.", author: "Albert Einstein" },
  { text: "Dünyayı anlamaya duyulan tutku, insanın en asil macerasıdır.", author: "Carl Sagan" },
  { text: "Hiçbir şey yapmadan durmaktansa, bilmediğim bir denize yelken açmayı yeğlerim.", author: "Leonardo da Vinci" },
  { text: "İlim ve sanat takdir edilmediği yerden göç eder; merakını daima diri tut.", author: "İbn-i Sina" },
  { text: "Kitaplar, zamanın derinliklerinden gelen sessiz ama en sadık dostlardır.", author: "Montaigne" },
  { text: "Merak etmek, karanlık bir odaya kibrit çakmak gibidir; her kıvılcım yeni bir dünya aydınlatır.", author: "Ursula K. Le Guin" },
  { text: "Bir insanın zekası, verdiği cevaplardan çok sorduğu sorularda gizlidir.", author: "Voltaire" },
  { text: "Her gün yeni bir şey öğrenmeyen zihin, paslanan bir kılıca benzer.", author: "Seneca" },
  { text: "Bilim, bilmediğimiz şeylerin büyüsünü keşfetme sanatıdır.", author: "Richard Feynman" },
  { text: "Evren, onu anlamak isteyen meraklı zihinler için yazılmış muazzam bir kitaptır.", author: "Galileo Galilei" },
  { text: "Bizi insan kılan şey, yıldızlara bakıp 'Acaba?' diye sorma cesaretimizdir.", author: "Marcus Aurelius" },
  { text: "Bende olağanüstü bir yetenek yok; yalnızca tutkulu bir merakım var.", author: "Albert Einstein" },
  { text: "Önemli olan, sorgulamayı bırakmamaktır. Merakın var olmak için kendine özgü bir nedeni vardır.", author: "Albert Einstein" },
  { text: "Hayal gücü bilgiden daha önemlidir; çünkü bilgi sınırlıdır.", author: "Albert Einstein" },
  { text: "Hayat bisiklete binmek gibidir: dengeni korumak için hareket etmeye devam etmelisin.", author: "Albert Einstein" },
  { text: "İlk kural, kendini kandırmamandır; kandırması en kolay kişi ise sensin.", author: "Richard Feynman" },
  { text: "Sorgulanamayan cevaplar yerine, cevaplanamayan sorular isterim.", author: "Richard Feynman" },
  { text: "Bilim, uzmanların cehaletine duyulan inançtır.", author: "Richard Feynman" },
  { text: "Bir yerlerde, inanılmaz bir şey bilinmeyi bekliyor.", author: "Carl Sagan" },
  { text: "Biz, evrenin kendini tanıma biçimiyiz.", author: "Carl Sagan" },
  { text: "Olağanüstü iddialar, olağanüstü kanıtlar gerektirir.", author: "Carl Sagan" },
  { text: "Sıfırdan elmalı turta yapmak isterseniz, önce evreni icat etmelisiniz.", author: "Carl Sagan" },
  { text: "Tek bildiğim, hiçbir şey bilmediğimdir.", author: "Sokrates" },
  { text: "Sorgulanmamış bir hayat, yaşanmaya değmez.", author: "Sokrates" },
  { text: "Bilgelik merakla başlar.", author: "Sokrates" },
  { text: "Bütün insanlar, doğaları gereği bilmek ister.", author: "Aristoteles" },
  { text: "Bir düşünceyi benimsemeden onun üzerinde durabilmek, eğitimli bir zihnin işaretidir.", author: "Aristoteles" },
  { text: "Öğrenmenin kökleri acı, meyveleri tatlıdır.", author: "Aristoteles" },
  { text: "Zihin, doldurulacak bir kap değil, tutuşturulacak bir ateştir.", author: "Plutarkhos" },
  { text: "Hiç kimse aynı nehirde iki kez yıkanamaz.", author: "Herakleitos" },
  { text: "Beklenmedik olanı beklemezsen, onu asla bulamazsın.", author: "Herakleitos" },
  { text: "Doğa gizlenmeyi sever.", author: "Herakleitos" },
  { text: "Kendini bil.", author: "Delfi Apollon Tapınağı" },
  { text: "Sanat uzun, hayat kısadır.", author: "Hipokrat" },
  { text: "Doğmadan önce olup bitenleri bilmemek, hep çocuk kalmaktır.", author: "Cicero" },
  { text: "Kitapsız bir oda, ruhsuz bir beden gibidir.", author: "Cicero" },
  { text: "Öğretirken öğreniriz.", author: "Seneca" },
  { text: "Hangi limana gittiğini bilmeyene hiçbir rüzgâr yardım etmez.", author: "Seneca" },
  { text: "Kısa bir ömrümüz yok; ömrün çoğunu biz harcıyoruz.", author: "Seneca" },
  { text: "Ruh, düşüncelerinin rengine boyanır.", author: "Marcus Aurelius" },
  { text: "Yolu tıkayan şey, yolun kendisi olur.", author: "Marcus Aurelius" },
  { text: "Öğrenmek asla zihni yormaz.", author: "Leonardo da Vinci" },
  { text: "Deneyim asla yanılmaz; yanılan yalnızca ondan çıkardığımız yargılardır.", author: "Leonardo da Vinci" },
  { text: "Daha uzağı gördüysem, bunun nedeni devlerin omuzlarında durmamdır.", author: "Isaac Newton" },
  { text: "Kendimi deniz kıyısında oynayan bir çocuk gibi görüyorum; önümde hakikat okyanusu keşfedilmemiş uzanırken.", author: "Isaac Newton" },
  { text: "Doğa kitabı matematik dilinde yazılmıştır.", author: "Galileo Galilei" },
  { text: "Bir insana hiçbir şey öğretemezsiniz; ona ancak kendi içinde bulmasına yardım edebilirsiniz.", author: "Galileo Galilei" },
  { text: "Şans, yalnızca hazırlıklı zihinlere güler.", author: "Louis Pasteur" },
  { text: "Ne biliyorum ben?", author: "Montaigne" },
  { text: "Okumak, geçmiş yüzyılların en seçkin insanlarıyla sohbet etmek gibidir.", author: "René Descartes" },
  { text: "Şüphe, bilgeliğin başlangıcıdır.", author: "René Descartes" },
  { text: "Kesinliklerle başlayan şüphelerle biter; şüphelerle başlamaya razı olan kesinlikle biter.", author: "Francis Bacon" },
  { text: "Bazı kitaplar tadılmak, bazıları yutulmak, birkaçı da çiğnenip sindirilmek içindir.", author: "Francis Bacon" },
  { text: "Okumak insanı doldurur, konuşmak hazırlar, yazmak ise kesinleştirir.", author: "Francis Bacon" },
  { text: "Bilmek yetmez, uygulamalıyız; istemek yetmez, yapmalıyız.", author: "Goethe" },
  { text: "İnsan ancak bildiğini görür.", author: "Goethe" },
  { text: "Bilgiye yapılan yatırım, en yüksek getiriyi sağlar.", author: "Benjamin Franklin" },
  { text: "Elime biraz para geçtiğinde kitap alırım; artarsa yiyecek ve giysi.", author: "Erasmus" },
  { text: "Bilginin en büyük düşmanı cehalet değil, bilgi yanılsamasıdır.", author: "Stephen Hawking" },
  { text: "Yıldızlara bakın, ayaklarınıza değil.", author: "Stephen Hawking" },
  { text: "Bilimdeki en heyecan verici söz \"Buldum!\" değil, \"Bu tuhaf...\" sözüdür.", author: "Isaac Asimov" },
  { text: "Keşif, herkesin gördüğünü görmek ve kimsenin düşünmediğini düşünmektir.", author: "Albert Szent-Györgyi" },
  { text: "Uzman, dar bir alanda yapılabilecek bütün hataları yapmış kişidir.", author: "Niels Bohr" },
  { text: "Bilgimiz zorunlu olarak sonlu, cehaletimiz ise zorunlu olarak sonsuzdur.", author: "Karl Popper" },
  { text: "Dünyanın derdi, aptalların küstahça emin, bilgelerin ise kuşkularla dolu olmasıdır.", author: "Bertrand Russell" },
  { text: "Bilim bildiğimiz, felsefe bilmediğimizdir.", author: "Bertrand Russell" },
  { text: "Bilimin büyük bir güzelliğe sahip olduğunu düşünenlerdenim.", author: "Marie Curie" },
  { text: "Hayatta hiçbir şeyden korkulmaz, yalnızca anlaşılır. Şimdi daha çok anlama zamanı, ki daha az korkalım.", author: "Marie Curie" },
  { text: "Bilimin güzel yanı, ona inansanız da inanmasanız da doğru olmasıdır.", author: "Neil deGrasse Tyson" },
  { text: "21. yüzyılın cahilleri okuma yazma bilmeyenler değil; öğrenmeyi, öğrendiğini unutmayı ve yeniden öğrenmeyi bilmeyenler olacak.", author: "Alvin Toffler" },
  { text: "Eğitim, hayata hazırlık değildir; eğitimin kendisi hayattır.", author: "John Dewey" },
  { text: "Merak, güçlü ve canlı zihinlerin en kalıcı özelliklerinden biridir.", author: "Samuel Johnson" },
  { text: "Can sıkıntısının çaresi meraktır; merakın ise çaresi yoktur.", author: "Dorothy Parker" },
  { text: "Dışarıya bakan düş görür, içeriye bakan uyanır.", author: "Carl Jung" },
  { text: "Bir kitap, içimizdeki donmuş denizi kıracak bir balta olmalıdır.", author: "Franz Kafka" },
  { text: "Cenneti hep bir tür kütüphane olarak hayal etmişimdir.", author: "Jorge Luis Borges" },
  { text: "Okumayan insanın, okuyamayan insandan hiçbir üstünlüğü yoktur.", author: "Mark Twain" },
  { text: "Eğitimimin, okumama engel olmasına asla izin vermedim.", author: "Mark Twain" },
  { text: "Başımızı belaya sokan bilmediklerimiz değil, kesin bildiğimizi sanıp yanıldıklarımızdır.", author: "Mark Twain" },
  { text: "Herkesin aynı şeyi düşündüğü yerde, kimse fazla düşünmüyordur.", author: "Walter Lippmann" },
  { text: "Yaşamak için bir \"neden\"i olan, hemen her \"nasıl\"a katlanır.", author: "Friedrich Nietzsche" },
  { text: "Dünyamın sınırları, dilimin sınırlarıdır.", author: "Ludwig Wittgenstein" },
  { text: "Üzerine konuşulamayan konusunda susmalı.", author: "Ludwig Wittgenstein" },
  { text: "Öğrenmeden düşünmek tehlikeli, düşünmeden öğrenmek beyhudedir.", author: "Konfüçyüs" },
  { text: "Bilmediğini bilmek, bilginin başlangıcıdır.", author: "Konfüçyüs" },
  { text: "Bin millik yolculuk tek bir adımla başlar.", author: "Lao Tzu" },
  { text: "Başkalarını bilen bilgilidir; kendini bilen aydınlanmıştır.", author: "Lao Tzu" },
  { text: "Dün dünde kaldı cancağızım, bugün yeni şeyler söylemek lazım.", author: "Mevlânâ" },
  { text: "Okunacak en büyük kitap insandır.", author: "Hacı Bektaş Veli" },
  { text: "Hayatta en hakiki mürşit ilimdir, fendir.", author: "Mustafa Kemal Atatürk" }
];

let currentQuoteIndex = Math.floor(Math.random() * CURIOSITY_QUOTES.length);
let sessionPetCount = 0;
let lastCatPetTime = 0;
let rapidPetStreak = 0;
const RAPID_PET_WINDOW_MS = 1000; // bu aralıkta üst üste 3+ tıklama kediyi huysuzlandırır
const RAPID_PET_ANNOY_THRESHOLD = 3;

// ---------- Masa Yoldaşları (Pet Companions) Yapılandırması ----------
const PET_CONFIG = {
  cat: {
    name: "Sandık Kedisi",
    shortName: "Kedi",
    icon: "🐱",
    defaultColor: "orange",
    colors: [
      { id: "orange", name: "Sarman / Tekir", primary: "#e68d4a", dark: "#9c4a16", outline: "#502409", belly: "#fff5ea", blush: "#f89f9f", innerEar: "#f9c0a8" },
      { id: "tuxedo", name: "Smokin / Gece", primary: "#383a45", dark: "#1c1e24", outline: "#0c0d10", belly: "#f4f4f8", blush: "#f5a4a4", innerEar: "#e8ebf0" },
      { id: "white", name: "Pamuk Beyazı", primary: "#fbf8f2", dark: "#998b79", outline: "#594f42", belly: "#ffffff", blush: "#f8a8b8", innerEar: "#fbe4e8" },
      { id: "grey", name: "Duman / Kül", primary: "#828b99", dark: "#444b57", outline: "#21262e", belly: "#e8ebf0", blush: "#f89f9f", innerEar: "#cfd5dc" },
      { id: "calico", name: "Alacalı / Kaliko", primary: "#dd8040", dark: "#3d2d23", outline: "#1f150e", belly: "#fff8f0", blush: "#f89f9f", innerEar: "#f7d0b5" }
    ],
    happyEmote: "🤍🐾",
    annoyedEmote: "😾💢",
    idleEmotes: ["z", "z", "Z"],
    awakeEmotes: ["✨", "💡", "🐾"],
    toastAnnoyed: "😾 Mırrr! Sandık Kedisi biraz dinlenmek istiyor, ona nefes aldır 🐾",
    toastMessages: [
      "Miyaaav! 🐱✨ (Sandık Kedisi sevindi ve patisini uzattı)",
      "Mırrr... 🐱🐾 (Sandık Kedisi huzurla mırıldanıyor)",
      "Miyav~ 🐾 (Sandık Kedisi seninle öğrenmeyi çok seviyor!)",
      "Mırrr... 🐱💤 (Kedi başını patilerine daha çok gömdü)"
    ],
    milestone3: "🐱 Miyaav~ Mırrr... Sandık Kedisi başını eline yasladı! 🐾 (Dostluk +1)",
    milestone5: "🏆 Gizli Başarım: Sandık Kedisinin Sırdaşı! 🐱🐾 Kedi sana tamamen bağlandı."
  },
  dog: {
    name: "Sandık Köpeği",
    shortName: "Köpek",
    icon: "🐶",
    defaultColor: "caramel",
    colors: [
      { id: "caramel", name: "Karamel / Golden", primary: "#dc9743", dark: "#8c4d0e", outline: "#492603", belly: "#fff3e3", blush: "#f8a598", innerEar: "#fcecd2" },
      { id: "chocolate", name: "Çikolata Kahve", primary: "#724727", dark: "#3a1f0d", outline: "#1b0b03", belly: "#ecd9c6", blush: "#d48888", innerEar: "#dfcbb5" },
      { id: "cream", name: "Krem / Açık Bal", primary: "#f0e5d1", dark: "#9e8b72", outline: "#544634", belly: "#ffffff", blush: "#f8a8a8", innerEar: "#faefe0" },
      { id: "black", name: "Gece / Karabaş", primary: "#33353c", dark: "#1a1b1f", outline: "#0b0c0e", belly: "#d8d9e0", blush: "#e58a8a", innerEar: "#a6a8b2" },
      { id: "corgi", name: "Corgi / Alaca", primary: "#d07f33", dark: "#3b322a", outline: "#1d1712", belly: "#ffffff", blush: "#f8a598", innerEar: "#fbe4cb" }
    ],
    happyEmote: "🦴🐾",
    annoyedEmote: "🐶💢",
    idleEmotes: ["z", "z", "Z"],
    awakeEmotes: ["🐾", "🦴", "✨"],
    toastAnnoyed: "🐶 Hav! Sandık Köpeği uykusundan uyandı, biraz başını okşa ve dinlensin 🐾",
    toastMessages: [
      "Vuf vuf! 🐶✨ (Sandık Köpeği kuyruğunu neşeyle salladı)",
      "Mırk... 🐶🐾 (Köpek burnunu sevinçle eline dokundurdu)",
      "Hav hav! 🐾 (Sandık Köpeği seninle yeni kavramlar keşfetmeye bayılıyor!)",
      "Hıff... 🐶💤 (Köpek derin bir nefes alıp başını patisine koydu)"
    ],
    milestone3: "🐶 Vuf! Kuyruk sallandı... Sandık Köpeği en sadık çalışma arkadaşın oldu! 🐾",
    milestone5: "🏆 Gizli Başarım: Sadık Dost! 🐶🦴 Sandık Köpeği artık senden hiç ayrılmıyor."
  },
  rabbit: {
    name: "Sandık Tavşanı",
    shortName: "Tavşan",
    icon: "🐰",
    defaultColor: "white",
    colors: [
      { id: "white", name: "Pamuk Beyazı", primary: "#faf8f2", dark: "#968975", outline: "#524738", belly: "#ffffff", blush: "#f9a8b8", innerEar: "#fde8ec" },
      { id: "cinnamon", name: "Tarçın Sarısı", primary: "#ce8547", dark: "#783e0e", outline: "#421f03", belly: "#fff4e6", blush: "#f9a8b8", innerEar: "#f9ddc3" },
      { id: "ash", name: "Kül Grisi", primary: "#9799a6", dark: "#4d505c", outline: "#25272e", belly: "#ececf2", blush: "#f9a8b8", innerEar: "#d2d3dc" },
      { id: "spotted", name: "Benekli / Bal", primary: "#e6c9a3", dark: "#6e4726", outline: "#38200d", belly: "#fffbf6", blush: "#f9a8b8", innerEar: "#f3e1cb" }
    ],
    happyEmote: "🥕✨",
    annoyedEmote: "🐰💢",
    idleEmotes: ["z", "z", "Z"],
    awakeEmotes: ["🥕", "✨", "🌸"],
    toastAnnoyed: "🐰 Puf! Sandık Tavşanı ayağını yere vurdu, biraz sakinleşmesini bekle 🥕",
    toastMessages: [
      "Kıpır kıpır! 🐰🥕 (Sandık Tavşanı burnunu sevimli sevimli oynattı)",
      "Pıt pıt... 🐰✨ (Tavşan uzun kulaklarını neşeyle salladı)",
      "Fısıl~ 🥕 (Sandık Tavşanı sessiz kütüphanede sana huzur veriyor!)",
      "Mışıl mışıl... 🐰💤 (Tavşan yumuşacık bir pamuk yumağı gibi kıvrıldı)"
    ],
    milestone3: "🐰 Pıt pıt... Sandık Tavşanı kulaklarını sana doğru çevirdi! 🥕 (Huzur +1)",
    milestone5: "🏆 Gizli Başarım: Tavşan Fısıldayan! 🐰🥕 Sandık Tavşanı en sevdiği havucu seninle paylaştı."
  },
  fox: {
    name: "Sandık Tilkisi",
    shortName: "Tilki",
    icon: "🦊",
    defaultColor: "red",
    colors: [
      { id: "red", name: "Kızıl Orman", primary: "#df5a1a", dark: "#852a03", outline: "#451200", belly: "#fff5eb", blush: "#f89a8e", innerEar: "#fdd9c4" },
      { id: "arctic", name: "Kutup Beyazı", primary: "#f0f4f8", dark: "#7c8e9e", outline: "#445361", belly: "#ffffff", blush: "#f8a8b8", innerEar: "#e2eaf0" },
      { id: "silver", name: "Gümüş / Gece", primary: "#4e5765", dark: "#21262e", outline: "#101317", belly: "#d7dee5", blush: "#f59898", innerEar: "#8d98a6" },
      { id: "golden", name: "Altın Kum", primary: "#e89e2c", dark: "#875206", outline: "#472801", belly: "#fff8ec", blush: "#f89a8e", innerEar: "#fbe4bf" }
    ],
    happyEmote: "🍂✨",
    annoyedEmote: "🦊💢",
    idleEmotes: ["z", "z", "Z"],
    awakeEmotes: ["🍂", "✨", "💡"],
    toastAnnoyed: "🦊 Ciyak! Sandık Tilkisi kuyruğunu çekti, biraz sakinleşsin 🍂",
    toastMessages: [
      "Yip yip! 🦊✨ (Sandık Tilkisi kocaman kabarık kuyruğunu kıpırdattı)",
      "Cıvıl cıvıl... 🦊🍂 (Tilki zekice gözlerini kırpıştırdı)",
      "Yip~ 🍂 (Sandık Tilkisi gizemli kavramları araştırmayı çok seviyor!)",
      "Kıvrım kıvrım... 🦊💤 (Tilki kuyruğunu burnuna sarıp tatlı bir uykuya daldı)"
    ],
    milestone3: "🦊 Yip! Sandık Tilkisi kuyruğunun ucunu sana uzattı! 🍂 (Merak +1)",
    milestone5: "🏆 Gizli Başarım: Ormanın Bilgesi! 🦊💎 Sandık Tilkisi sana tüm sırlarını açtı."
  }
};

// Ambiyans kayıtları farklı seviyelerde masterlanmış (yağmur belirgin şekilde
// yağmur/deniz'den daha yüksek); tip başına hedef seviye bunu dengeler.
const AMBIENCE_TARGET_VOLUME = { rain: 0.35, fire: 0.95, ocean: 0.75 };

// ---------- Audio Synthesizer (Zero Dependency Web Audio API) ----------
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.currentAmbienceType = "none";
    this.ambienceFade = null;
    this.meowAudio = null;
    this.meowSweetAudio = null;
    this.purrAudio = null;
    this.rainAudio = null;
    this.fireAudio = null;
    this.oceanAudio = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    if (this.ctx && !this.masterGain) {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.masterVolume();
      this.masterGain.connect(this.ctx.destination);
    }
    if (!this.meowAudio && typeof Audio !== "undefined") {
      try {
        this.meowAudio = new Audio("/meow.mp3");
        this.meowAudio.preload = "auto";
        this.meowSweetAudio = new Audio("/meow-sweet.mp3");
        this.meowSweetAudio.preload = "auto";
        this.purrAudio = new Audio("/purr.mp3");
        this.purrAudio.preload = "auto";
        this.rainAudio = new Audio("/rain.mp3");
        this.rainAudio.preload = "auto";
        this.rainAudio.loop = true;
        this.fireAudio = new Audio("/fireplace.mp3");
        this.fireAudio.preload = "auto";
        this.fireAudio.loop = true;
        this.oceanAudio = new Audio("/ocean.mp3");
        this.oceanAudio.preload = "auto";
        this.oceanAudio.loop = true;
      } catch { /* ignore */ }
    }
    return this.ctx;
  }

  isAmbiencePlaying() {
    return !!(
      (this.rainAudio && !this.rainAudio.paused) ||
      (this.fireAudio && !this.fireAudio.paused) ||
      (this.oceanAudio && !this.oceanAudio.paused)
    );
  }

  masterVolume() {
    return typeof settings.soundVolume === "number" ? settings.soundVolume : 0.7;
  }

  // Kullanıcı ses seviyesi kaydırıcısını hareket ettirdiğinde çağrılır: hem
  // sentezlenen bliplerin ortak çıkış kazancını hem de o an çalan ambiyans
  // parçasının ses seviyesini anında (yeniden başlatmadan) günceller.
  setMasterVolume(v) {
    settings.soundVolume = v;
    if (this.masterGain) this.masterGain.gain.value = v;
    const activeAmbience = { rain: this.rainAudio, fire: this.fireAudio, ocean: this.oceanAudio }[this.currentAmbienceType];
    if (activeAmbience && !activeAmbience.paused) {
      activeAmbience.volume = (AMBIENCE_TARGET_VOLUME[this.currentAmbienceType] || 0.5) * v;
    }
  }

  playTick() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(540 + Math.random() * 140, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch { /* sessiz kal */ }
  }

  playLand() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5
      gain.gain.setValueAtTime(0.30, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(now + 0.4);
    } catch { /* sessiz kal */ }
  }

  playChime() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - C
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + i * 0.12;
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.35, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.9);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(start);
        osc.stop(start + 0.9);
      });
    } catch { /* sessiz kal */ }
  }

  playPurr() {
    if (!settings.sound) return;
    this.init();
    try {
      if (this.purrAudio) {
        this.purrAudio.currentTime = 0;
        this.purrAudio.volume = 0.9 * this.masterVolume();
        this.purrAudio.play().catch(() => {});
        return;
      }
    } catch { /* ignore */ }
  }

  playMeow() {
    if (!settings.sound) return;
    this.init();
    try {
      const useSweet = Math.random() < 0.5 && this.meowSweetAudio;
      const track = useSweet ? this.meowSweetAudio : this.meowAudio;
      // meow.mp3 is a hotter master than meow-sweet.mp3 (near-clipping vs.
      // soft) — different base levels keep the two feeling similarly loud.
      const base = useSweet ? 0.95 : 0.7;
      if (track) {
        track.currentTime = 0;
        track.volume = base * this.masterVolume();
        track.play().catch(() => {});
        return;
      }
    } catch { /* ignore */ }
  }

  // "Mrr" — hırıltı yerine kedinin kısa, alçak sesli bir protesto mırıltısı:
  // meow.mp3'ün hızını/perdesini düşürüp klonlayarak çalıyor, ayrı bir ses
  // dosyasına gerek kalmadan. cloneNode kullanılıyor ki normal meow'un
  // playbackRate/volume durumu bundan etkilenmesin.
  playMrr() {
    if (!settings.sound) return;
    this.init();
    try {
      if (this.meowAudio) {
        const clone = this.meowAudio.cloneNode();
        clone.playbackRate = 0.72;
        clone.volume = 0.55 * this.masterVolume();
        clone.play().catch(() => {});
        return;
      }
    } catch { /* ignore */ }
  }

  playCatInteraction(mood = "happy") {
    if (mood === "annoyed") {
      this.playMrr();
      return;
    }
    if (Math.random() < 0.65) {
      this.playMeow();
    } else {
      this.playPurr();
    }
  }

  playDogSound(mood = "happy") {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (mood === "annoyed") {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.linearRampToValueAtTime(70, now + 0.4);
        gain.gain.setValueAtTime(0.32, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.4);
        return;
      }
      // "Hav hav" — her havlama bir gürültü patlaması (ısırık dokusu) +
      // düşen üçgen ton katmanından oluşuyor, tek sinüsten çok daha belirgin.
      [0, 0.16].forEach((offset, idx) => {
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.05);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.setValueAtTime(500, now + offset);
        noiseFilter.Q.setValueAtTime(0.8, now + offset);
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.35, now + offset);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.05);
        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.masterGain);
        noise.start(now + offset);

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        const startFreq = idx === 0 ? 340 : 400;
        osc.frequency.setValueAtTime(startFreq, now + offset);
        osc.frequency.exponentialRampToValueAtTime(180, now + offset + 0.12);
        gain.gain.setValueAtTime(0.38, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.14);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + offset);
        osc.stop(now + offset + 0.14);
      });
    } catch { /* sessiz kal */ }
  }

  playRabbitSound(mood = "happy") {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (mood === "annoyed") {
        // Gerçek tavşanlar ürktüğünde tiz bir ses değil, arka ayaklarıyla
        // yere vurur (thump) — kızgın modda o tok tepme sesi kullanılıyor.
        [0, 0.18].forEach((offset) => {
          const bufferSize = Math.floor(this.ctx.sampleRate * 0.08);
          const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
          }
          const noise = this.ctx.createBufferSource();
          noise.buffer = buffer;
          const filter = this.ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(220, now + offset);
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(0.55, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.09);
          noise.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain);
          noise.start(now + offset);
        });
        return;
      }
      // Memnun tavşan: yumuşak, tiz çift "cik cik" — eski sürümden daha
      // düşük perdeli ve daha yüksek kazançlı, duyulabilirliği artırıyor.
      [0, 0.09].forEach((offset, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(idx === 0 ? 950 : 1150, now + offset);
        osc.frequency.exponentialRampToValueAtTime(idx === 0 ? 1100 : 1300, now + offset + 0.07);
        gain.gain.setValueAtTime(0.28, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.07);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + offset);
        osc.stop(now + offset + 0.07);
      });
    } catch { /* sessiz kal */ }
  }

  playFoxSound(mood = "happy") {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (mood === "annoyed") {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(280, now + 0.22);
        gain.gain.setValueAtTime(0.32, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.22);
        return;
      }
      // "Yip yip yip" — kısa, düşen üçlü tilki havlaması, eski sürümden
      // belirgin şekilde daha yüksek kazançlı.
      [0, 0.1, 0.2].forEach((offset, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        const freqs = [900, 760, 1020];
        osc.frequency.setValueAtTime(freqs[idx], now + offset);
        osc.frequency.exponentialRampToValueAtTime(freqs[idx] * 0.7, now + offset + 0.08);
        gain.gain.setValueAtTime(0.26, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.09);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + offset);
        osc.stop(now + offset + 0.09);
      });
    } catch { /* sessiz kal */ }
  }

  playPetInteraction(mood = "happy") {
    const petType = settings.petType || "cat";
    if (petType === "dog") {
      this.playDogSound(mood);
    } else if (petType === "rabbit") {
      this.playRabbitSound(mood);
    } else if (petType === "fox") {
      this.playFoxSound(mood);
    } else {
      this.playCatInteraction(mood);
    }
  }

  playCoffee() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // High ceramic mug clink
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1760, now);
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.25);

      // Warm low body note
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(440, now + 0.02);
      gain2.gain.setValueAtTime(0.12, now + 0.02);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(now + 0.02);
      osc2.stop(now + 0.3);
    } catch { /* sessiz kal */ }
  }

  playRustle() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.15);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(1.5, now);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      noise.start(now);
    } catch { /* sessiz kal */ }
  }

  playWaxStamp() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(130, now);
      osc1.frequency.exponentialRampToValueAtTime(45, now + 0.12);
      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.15);
    } catch { /* sessiz kal */ }
  }

  playChainClick() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(1450, now);
      osc1.frequency.exponentialRampToValueAtTime(680, now + 0.05);
      gain1.gain.setValueAtTime(0.40, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.08);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(2600, now + 0.03);
      osc2.frequency.exponentialRampToValueAtTime(1100, now + 0.14);
      gain2.gain.setValueAtTime(0.25, now + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(now + 0.03);
      osc2.stop(now + 0.18);
    } catch { /* sessiz kal */ }
  }

  setAmbience(type) {
    this.currentAmbienceType = type;
    this.stopAmbience();
    if (!settings.sound || type === "none") return;
    this.init();
    const track = { rain: this.rainAudio, fire: this.fireAudio, ocean: this.oceanAudio }[type] || null;
    if (!track) return;
    try {
      track.currentTime = 0;
      track.volume = 0.01;
      track.play().catch(() => {});
      const target = (AMBIENCE_TARGET_VOLUME[type] || 0.5) * this.masterVolume();
      this.fadeAmbienceVolume(track, target, 600);
    } catch { /* sessiz kal */ }
  }

  fadeAmbienceVolume(track, targetVolume, durationMs) {
    if (this.ambienceFade) clearInterval(this.ambienceFade);
    const steps = 20;
    const startVolume = track.volume;
    let step = 0;
    this.ambienceFade = setInterval(() => {
      step += 1;
      track.volume = startVolume + (targetVolume - startVolume) * (step / steps);
      if (step >= steps) clearInterval(this.ambienceFade);
    }, durationMs / steps);
  }

  stopAmbience() {
    if (this.ambienceFade) {
      clearInterval(this.ambienceFade);
      this.ambienceFade = null;
    }
    [this.rainAudio, this.fireAudio, this.oceanAudio].forEach((track) => {
      if (track && !track.paused) {
        track.pause();
        track.currentTime = 0;
      }
    });
  }
}

const sfx = new SoundEffects();

// ---------- Helpers ----------

// Şablon dizgilerine giren her kullanıcı/AI metni bundan geçmeli.
const ESCAPE_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ESCAPE_MAP[ch]);
}

function loadSettings() {
  const fallback = {
    researchMinutes: 15,
    sound: true,
    soundVolume: 0.7,
    theme: "dark",
    palette: "coffee",
    category: "general",
    ambience: "none",
    lampFocus: false,
    petType: "cat",
    petColor: "orange"
  };
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const loaded = { ...fallback, ...parsed };

    if (!PET_CONFIG[loaded.petType]) {
      loaded.petType = "cat";
    }
    const currentPetCfg = PET_CONFIG[loaded.petType] || PET_CONFIG.cat;
    if (!currentPetCfg.colors.some((c) => c.id === loaded.petColor)) {
      loaded.petColor = currentPetCfg.defaultColor;
    }
    if (!["smart", "awake", "sleep"].includes(loaded.petBehavior)) {
      loaded.petBehavior = "smart";
    }

    const hadLegacyFields = "provider" in loaded || "apiKeys" in loaded || "models" in loaded || "waxColor" in loaded;
    delete loaded.provider;
    delete loaded.apiKeys;
    delete loaded.models;
    delete loaded.waxColor;
    if (hadLegacyFields) {
      try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(loaded)); } catch { /* ignore */ }
    }

    return loaded;
  } catch {
    return fallback;
  }
}

// ---------- State ----------
let settings = loadSettings();
let state = {
  phase: "idle", // idle -> landed -> researching -> done
  topic: null,
  spinning: false,
  timerId: null,
  remaining: 0,
  totalForPhase: 0,
  paused: false,
  notes: ""
};

let dismissedReview = null;
let historySearchQuery = "";
let historyActiveCategory = "all";
let tabDragMoved = false; 

// ---------- DOM Cache ----------
const stage = document.querySelector("#stage");
const toast = document.querySelector("#toast");
const settingsBtn = document.querySelector("#settingsBtn");
const settingsModal = document.querySelector("#settingsModal");
const closeSettings = document.querySelector("#closeSettings");
const profileBtn = document.querySelector("#profileBtn");
const profileModal = document.querySelector("#profileModal");
const closeProfile = document.querySelector("#closeProfile");
const soundQuickToggle = document.querySelector("#soundQuickToggle");
const soundIconOn = document.querySelector("#soundIconOn");
const soundIconOff = document.querySelector("#soundIconOff");
const ambientSoundBtn = document.querySelector("#ambientSoundBtn");
const ambientIcon = document.querySelector("#ambientIcon");
const homeBtn = document.querySelector("#homeBtn");
const lampPullChain = document.querySelector("#lampPullChain");

const researchRange = document.querySelector("#researchRange");
const researchLabel = document.querySelector("#researchLabel");
const soundToggle = document.querySelector("#soundToggle");
const soundVolumeRange = document.querySelector("#soundVolumeRange");
const soundVolumeLabel = document.querySelector("#soundVolumeLabel");

const statsContainer = document.querySelector("#statsContainer");
const historyListContainer = document.querySelector("#historyListContainer");
const historyFilterRow = document.querySelector("#historyFilterRow");
const historySearchInput = document.querySelector("#historySearchInput");
const exportHistoryBtn = document.querySelector("#exportHistoryBtn");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch { /* ignore */ }
  syncSoundIcons();
  syncAmbientButton();
  applyTheme(settings.theme);
  applyPalette(settings.palette);
  applyLampFocus(settings.lampFocus);
}

function applyTheme(theme = settings.theme || "dark") {
  settings.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);

  const themeIconDark = document.querySelector("#themeIconDark");
  const themeIconLight = document.querySelector("#themeIconLight");
  const themeBtnDark = document.querySelector("#themeBtnDark");
  const themeBtnLight = document.querySelector("#themeBtnLight");

  if (theme === "light") {
    if (themeIconDark) themeIconDark.classList.add("is-hidden");
    if (themeIconLight) themeIconLight.classList.remove("is-hidden");
    if (themeBtnDark) themeBtnDark.classList.remove("is-active");
    if (themeBtnLight) themeBtnLight.classList.add("is-active");
  } else {
    if (themeIconDark) themeIconDark.classList.remove("is-hidden");
    if (themeIconLight) themeIconLight.classList.add("is-hidden");
    if (themeBtnDark) themeBtnDark.classList.add("is-active");
    if (themeBtnLight) themeBtnLight.classList.remove("is-active");
  }
}

function applyPalette(palette = settings.palette || "coffee") {
  settings.palette = palette;
  document.documentElement.setAttribute("data-palette", palette);

  document.querySelectorAll(".palette-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.palette === palette);
  });
}

function applyLampFocus(isFocus = settings.lampFocus || false) {
  settings.lampFocus = isFocus;
  document.body.classList.toggle("focus-lamp-on", isFocus);
  if (lampPullChain) {
    lampPullChain.classList.toggle("is-lit", isFocus);
  }
}

function syncAmbientButton() {
  if (!ambientIcon || !ambientSoundBtn) return;
  const map = {
    none: { icon: "🔇", title: "Arka Plan Ambiyansı: Kapalı (Açmak için tıkla)" },
    rain: { icon: "🌧️", title: "Arka Plan Ambiyansı: Yağmur Sesi" },
    fire: { icon: "🔥", title: "Arka Plan Ambiyansı: Şömine Çıtırtısı" },
    ocean: { icon: "🌊", title: "Arka Plan Ambiyansı: Deniz Dalgaları" }
  };
  const cur = map[settings.ambience] || map.none;
  ambientIcon.textContent = cur.icon;
  ambientSoundBtn.title = cur.title;
  ambientSoundBtn.classList.toggle("is-active", settings.ambience !== "none");
}

function syncSoundIcons() {
  if (soundIconOn && soundIconOff) {
    if (settings.sound) {
      soundIconOn.classList.remove("is-hidden");
      soundIconOff.classList.add("is-hidden");
    } else {
      soundIconOn.classList.add("is-hidden");
      soundIconOff.classList.remove("is-hidden");
    }
  }
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(list) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
  } catch { /* ignore */ }
}

function addToHistory(topic, category, notes = "") {
  const list = loadHistory();
  list.unshift({
    tr: topic.tr,
    en: topic.en,
    category: category || "general",
    notes: notes ? notes.trim() : "",
    finishedAt: Date.now()
  });
  saveHistory(list);
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("is-hidden");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.add("is-hidden");
  }, 2200);
}

function copyToClipboard(text, msg = "Panoya kopyalandı!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    showToast("Kopyalanamadı");
  });
}

function formatTime(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function reviewTopicKey(item) {
  return `${item.tr}|${item.en}`;
}

function dueForReview() {
  const list = loadHistory();
  if (!list.length) return null;
  const now = Date.now();
  const latestByTopic = new Map();
  for (const item of list) {
    const key = reviewTopicKey(item);
    if (!latestByTopic.has(key)) latestByTopic.set(key, item);
  }
  for (const item of latestByTopic.values()) {
    if (reviewTopicKey(item) === dismissedReview) continue;
    if (now - item.finishedAt >= REVIEW_AFTER_MS) return item;
  }
  return null;
}

// ---------- Countdown Engine ----------
function startCountdown(seconds, onDone, startFrom = seconds) {
  clearInterval(state.timerId);
  state.totalForPhase = seconds;
  state.remaining = startFrom;
  state.paused = false;

  state.timerId = setInterval(() => {
    if (state.paused) return;
    state.remaining -= 1;
    persistSession();
    if (state.remaining <= 0) {
      clearInterval(state.timerId);
      sfx.playChime();
      triggerConfetti();
      onDone();
      return;
    }
    updateTimerDisplay();
  }, 1000);
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const digits = document.querySelector("#timerDigits");
  const circle = document.querySelector("#radialProgress");
  const section = document.querySelector("#timerSection");

  if (digits) digits.textContent = formatTime(Math.max(state.remaining, 0));
  if (circle) {
    const ratio = state.totalForPhase ? Math.max(0, state.remaining / state.totalForPhase) : 0;
    const circumference = 440; // 2 * PI * 70
    const offset = circumference * (1 - ratio);
    circle.style.strokeDashoffset = offset.toFixed(2);
  }
  if (section) {
    if (state.paused) section.classList.add("is-paused");
    else section.classList.remove("is-paused");
  }
}

// Her kategorinin kendi elle küratörlüğü yapılmış havuzu. Tanım/açıklama
// yok: kavramın adı verilir, araştırmayı kullanıcı yapar.
const CATEGORY_TOPICS = {
  general: TOPICS,
  technology: [
    { tr: "Conway Yasası", en: "Conway's Law" },
    { tr: "CAP Teoremi", en: "CAP Theorem" },
    { tr: "Halting Problemi", en: "The Halting Problem" },
    { tr: "Bizans Generalleri Problemi", en: "Byzantine Generals Problem" },
    { tr: "Moore Yasası", en: "Moore's Law" },
    { tr: "Amdahl Yasası", en: "Amdahl's Law" },
    { tr: "Turing Bütünlüğü", en: "Turing Completeness" },
    { tr: "Linus Yasası", en: "Linus's Law" },
    { tr: "Sızdıran Soyutlamalar Yasası", en: "The Law of Leaky Abstractions" },
    { tr: "P vs NP Problemi", en: "P versus NP Problem" },
    { tr: "Kuantum Üstünlüğü", en: "Quantum Supremacy" },
    { tr: "Dağıtık Mutabakat (Raft)", en: "Raft Consensus Algorithm" },
    { tr: "Açıklanabilir Yapay Zeka", en: "Explainable AI" },
    { tr: "Algoritmik Yanlılık", en: "Algorithmic Bias" },
    { tr: "Brooks Yasası", en: "Brooks's Law" },
    { tr: "Postel Yasası (Dayanıklılık İlkesi)", en: "Postel's Law" },
    { tr: "Hyrum Yasası", en: "Hyrum's Law" },
    { tr: "İki Generaller Problemi", en: "Two Generals' Problem" },
    { tr: "Yemek Yiyen Filozoflar Problemi", en: "Dining Philosophers Problem" },
    { tr: "Yarış Durumu", en: "Race Condition" },
    { tr: "Ölümcül Kilitlenme", en: "Deadlock" },
    { tr: "Teknik Borç", en: "Technical Debt" },
    { tr: "Kerckhoffs İlkesi", en: "Kerckhoffs's Principle" },
    { tr: "Merkle Ağacı", en: "Merkle Tree" },
    { tr: "Dijkstra'nın En Kısa Yol Algoritması", en: "Dijkstra's Algorithm" },
    { tr: "Huffman Kodlaması", en: "Huffman Coding" },
    { tr: "Nyquist-Shannon Örnekleme Teoremi", en: "Nyquist-Shannon Sampling Theorem" },
    { tr: "Metcalfe Yasası", en: "Metcalfe's Law" },
    { tr: "Von Neumann Mimarisi", en: "Von Neumann Architecture" },
    { tr: "Turing Testi", en: "The Turing Test" },
    { tr: "Aşırı Öğrenme", en: "Overfitting" },
    { tr: "AI Halüsinasyonu", en: "AI Hallucination" },
    { tr: "Federe Öğrenme", en: "Federated Learning" },
    { tr: "Shannon Bilgi Kuramı", en: "Shannon Information Theory" },
    { tr: "Açık Anahtarlı Şifreleme", en: "Public-Key Cryptography" },
    { tr: "Geri Yayılım Algoritması", en: "Backpropagation" },
    { tr: "Dikkat Mekanizması", en: "The Attention Mechanism" },
    { tr: "Büyük O Gösterimi", en: "Big-O Notation" },
    { tr: "Sıfır Bilgi İspatı", en: "Zero-Knowledge Proof" }
  ],
  science: [
    { tr: "Entropi İlkesi", en: "The Principle of Entropy" },
    { tr: "Schrödinger'in Kedisi", en: "Schrödinger's Cat" },
    { tr: "Heisenberg Belirsizlik İlkesi", en: "Heisenberg Uncertainty Principle" },
    { tr: "Çift Yarık Deneyi", en: "Double-Slit Experiment" },
    { tr: "Fotoelektrik Etki", en: "Photoelectric Effect" },
    { tr: "Doppler Etkisi", en: "The Doppler Effect" },
    { tr: "Kaos Teorisi ve Kelebek Etkisi", en: "Chaos Theory & The Butterfly Effect" },
    { tr: "Kırmızıya Kayma", en: "Redshift Phenomenon" },
    { tr: "Higgs Bozonu", en: "The Higgs Boson" },
    { tr: "Mutlak Sıfır", en: "Absolute Zero" },
    { tr: "Özel Görelilik Kuramı", en: "Special Relativity" },
    { tr: "Genel Görelilik Kuramı", en: "General Relativity" },
    { tr: "Kuantum Dolanıklığı", en: "Quantum Entanglement" },
    { tr: "Pauli Dışarlama İlkesi", en: "Pauli Exclusion Principle" },
    { tr: "Maxwell'in Şeytanı", en: "Maxwell's Demon" },
    { tr: "Brown Hareketi", en: "Brownian Motion" },
    { tr: "Rezonans Olayı", en: "Resonance" },
    { tr: "Coriolis Etkisi", en: "The Coriolis Effect" },
    { tr: "Bernoulli İlkesi", en: "Bernoulli's Principle" },
    { tr: "Arşimet İlkesi", en: "Archimedes' Principle" },
    { tr: "Le Chatelier İlkesi", en: "Le Chatelier's Principle" },
    { tr: "Avogadro Sayısı", en: "Avogadro's Number" },
    { tr: "Periyodik Yasa", en: "The Periodic Law" },
    { tr: "Gözlemci Etkisi", en: "The Observer Effect" },
    { tr: "Süperiletkenlik", en: "Superconductivity" },
    { tr: "Kuantum Tünelleme", en: "Quantum Tunnelling" },
    { tr: "Antimadde", en: "Antimatter" },
    { tr: "Nötrino Salınımı", en: "Neutrino Oscillation" },
    { tr: "Casimir Etkisi", en: "The Casimir Effect" },
    { tr: "Beliren Özellikler", en: "Emergence" },
    { tr: "Michelson-Morley Deneyi", en: "The Michelson-Morley Experiment" },
    { tr: "Kütle-Enerji Eşdeğerliği", en: "Mass-Energy Equivalence" },
    { tr: "Miller-Urey Deneyi", en: "The Miller-Urey Experiment" },
    { tr: "Rutherford Altın Folyo Deneyi", en: "Rutherford's Gold Foil Experiment" },
    { tr: "Parçacıkların Standart Modeli", en: "The Standard Model" }
  ],
  philosophy: [
    { tr: "Theseus'un Gemisi", en: "Ship of Theseus" },
    { tr: "Tramvay Problemi", en: "The Trolley Problem" },
    { tr: "Platon'un Mağara Alegorisi", en: "Allegory of the Cave" },
    { tr: "Çin Odası Düşünce Deneyi", en: "The Chinese Room Argument" },
    { tr: "Epiküros Paradoksu", en: "The Epicurean Paradox" },
    { tr: "Tabula Rasa", en: "Tabula Rasa (Blank Slate)" },
    { tr: "Kategorik Buyruk", en: "The Categorical Imperative" },
    { tr: "Solipsizm", en: "Solipsism" },
    { tr: "Buridan'ın Eşeği", en: "Buridan's Ass" },
    { tr: "Deneyim Makinesi", en: "The Experience Machine" },
    { tr: "Gettier Problemi", en: "The Gettier Problem" },
    { tr: "Occam'ın Usturası", en: "Occam's Razor" },
    { tr: "Hume Giyotini (Olan-Olması Gereken)", en: "Hume's Guillotine (Is-Ought Problem)" },
    { tr: "Pascal'ın Bahsi", en: "Pascal's Wager" },
    { tr: "Fıçıdaki Beyin", en: "Brain in a Vat" },
    { tr: "Sorites (Yığın) Paradoksu", en: "The Sorites Paradox" },
    { tr: "Zenon'un Paradoksları", en: "Zeno's Paradoxes" },
    { tr: "Yalancı Paradoksu", en: "The Liar Paradox" },
    { tr: "Mary'nin Odası (Bilgi Argümanı)", en: "Mary's Room" },
    { tr: "Bengi Dönüş", en: "Eternal Recurrence" },
    { tr: "Sisifos Miti ve Absürt", en: "The Myth of Sisyphus" },
    { tr: "Kötülüğün Sıradanlığı", en: "The Banality of Evil" },
    { tr: "Panoptikon", en: "The Panopticon" },
    { tr: "Toplumsal Sözleşme", en: "The Social Contract" },
    { tr: "Kategori Hatası", en: "Category Mistake" },
    { tr: "Varoluş Özden Önce Gelir", en: "Existence Precedes Essence" },
    { tr: "Zihin-Beden İkiliği", en: "Mind-Body Dualism" },
    { tr: "Doğalcı Yanılgı", en: "The Naturalistic Fallacy" },
    { tr: "Felsefi Zombi", en: "Philosophical Zombie" },
    { tr: "Chesterton'ın Çiti", en: "Chesterton's Fence" },
    { tr: "Sokratik Yöntem", en: "The Socratic Method" },
    { tr: "Cogito Ergo Sum", en: "Cogito, Ergo Sum" },
    { tr: "Wittgenstein'ın Dil Oyunları", en: "Language-Games" },
    { tr: "Gyges'in Yüzüğü", en: "The Ring of Gyges" },
    { tr: "Efendi-Köle Ahlakı", en: "Master-Slave Morality" }
  ],
  psychology: [
    { tr: "Bilişsel Çelişki", en: "Cognitive Dissonance" },
    { tr: "Asch Uyum Deneyi", en: "Asch Conformity Experiment" },
    { tr: "Dunning-Kruger Etkisi", en: "Dunning-Kruger Effect" },
    { tr: "Hedonik Koşu Bandı", en: "The Hedonic Treadmill" },
    { tr: "Sahtekarlık Sendromu", en: "Impostor Syndrome" },
    { tr: "Görünmez Goril Deneyi", en: "The Invisible Gorilla Test" },
    { tr: "Akış Hali", en: "Flow State" },
    { tr: "Ayna Nöronlar", en: "Mirror Neurons" },
    { tr: "Seyirci Etkisi", en: "The Bystander Effect" },
    { tr: "Zeigarnik Etkisi", en: "The Zeigarnik Effect" },
    { tr: "Doğrulama Yanlılığı", en: "Confirmation Bias" },
    { tr: "Kayıptan Kaçınma", en: "Loss Aversion" },
    { tr: "Çerçeveleme Etkisi", en: "The Framing Effect" },
    { tr: "Temel Atıf Hatası", en: "Fundamental Attribution Error" },
    { tr: "Milgram İtaat Deneyi", en: "Milgram Experiment" },
    { tr: "Stanford Hapishane Deneyi", en: "Stanford Prison Experiment" },
    { tr: "Klasik Koşullanma", en: "Classical Conditioning" },
    { tr: "Öğrenilmiş Çaresizlik", en: "Learned Helplessness" },
    { tr: "Maslow İhtiyaçlar Hiyerarşisi", en: "Maslow's Hierarchy of Needs" },
    { tr: "Bilişsel Yük Kuramı", en: "Cognitive Load Theory" },
    { tr: "Aralıklı Tekrar", en: "Spaced Repetition" },
    { tr: "Ebbinghaus Unutma Eğrisi", en: "The Forgetting Curve" },
    { tr: "Zirve-Son Kuralı", en: "Peak-End Rule" },
    { tr: "Batık Maliyet Yanılgısı", en: "Sunk Cost Fallacy" },
    { tr: "Barnum Etkisi", en: "The Barnum Effect" },
    { tr: "Halo Etkisi", en: "The Halo Effect" },
    { tr: "Sahiplik Etkisi", en: "The Endowment Effect" },
    { tr: "Yanlış Uzlaşı Etkisi", en: "False Consensus Effect" },
    { tr: "Sosyal Kaytarma", en: "Social Loafing" },
    { tr: "Grup Düşüncesi", en: "Groupthink" },
    { tr: "Edimsel Koşullanma", en: "Operant Conditioning" },
    { tr: "Beklenti Kuramı", en: "Prospect Theory" },
    { tr: "Sistem 1 ve Sistem 2 Düşünme", en: "Dual-Process Theory" },
    { tr: "Bağlanma Kuramı", en: "Attachment Theory" },
    { tr: "Marshmallow Deneyi", en: "The Stanford Marshmallow Experiment" },
    { tr: "Küçük Albert Deneyi", en: "The Little Albert Experiment" },
    { tr: "Pygmalion Etkisi", en: "The Pygmalion Effect" },
    { tr: "Yerkes-Dodson Yasası", en: "The Yerkes-Dodson Law" }
  ],
  history: [
    { tr: "Magna Carta", en: "Magna Carta Libertatum" },
    { tr: "Vestfalya Barışı", en: "Peace of Westphalia" },
    { tr: "İskenderiye Kütüphanesi", en: "The Library of Alexandria" },
    { tr: "Kadeş Barış Antlaşması", en: "Treaty of Kadesh" },
    { tr: "Meiji Restorasyonu", en: "The Meiji Restoration" },
    { tr: "Manhattan Projesi", en: "The Manhattan Project" },
    { tr: "Enigma ve Bletchley Park", en: "Enigma Cryptanalysis" },
    { tr: "Soğuk Savaş Doktrini", en: "The Cold War Doctrine" },
    { tr: "Gutenberg ve Matbaa Devrimi", en: "Gutenberg Printing Revolution" },
    { tr: "Hammurabi Kanunları", en: "Code of Hammurabi" },
    { tr: "İpek Yolu", en: "The Silk Road" },
    { tr: "Batı Roma'nın Çöküşü", en: "Fall of the Western Roman Empire" },
    { tr: "Kara Ölüm", en: "The Black Death" },
    { tr: "Haçlı Seferleri", en: "The Crusades" },
    { tr: "Rönesans", en: "The Renaissance" },
    { tr: "Coğrafi Keşifler Çağı", en: "The Age of Discovery" },
    { tr: "Aydınlanma Çağı", en: "The Age of Enlightenment" },
    { tr: "Fransız Devrimi", en: "The French Revolution" },
    { tr: "Sanayi Devrimi", en: "The Industrial Revolution" },
    { tr: "Amerikan Bağımsızlık Bildirgesi", en: "United States Declaration of Independence" },
    { tr: "Rosetta Taşı", en: "The Rosetta Stone" },
    { tr: "Berlin Konferansı", en: "The Berlin Conference" },
    { tr: "Sykes-Picot Antlaşması", en: "Sykes-Picot Agreement" },
    { tr: "Versay Antlaşması", en: "Treaty of Versailles" },
    { tr: "Marshall Planı", en: "The Marshall Plan" },
    { tr: "Küba Füze Krizi", en: "Cuban Missile Crisis" },
    { tr: "Berlin Duvarı'nın Yıkılışı", en: "Fall of the Berlin Wall" },
    { tr: "Truva Kazıları", en: "The Excavation of Troy" },
    { tr: "Göbeklitepe", en: "Göbekli Tepe" },
    { tr: "Lozan Antlaşması", en: "Treaty of Lausanne" },
    { tr: "Roma Yol Ağı", en: "The Roman Road Network" },
    { tr: "İstanbul'un Fethi", en: "The Fall of Constantinople" },
    { tr: "Protestan Reformu", en: "The Protestant Reformation" },
    { tr: "Rus Devrimi", en: "The Russian Revolution" },
    { tr: "Atlantik Köle Ticareti", en: "The Transatlantic Slave Trade" },
    { tr: "Atina'da Demokrasinin Doğuşu", en: "Athenian Democracy" }
  ],
  economy: [
    { tr: "Mahkumlar Çıkmazı", en: "Prisoner's Dilemma" },
    { tr: "Ortak Malların Trajedisi", en: "Tragedy of the Commons" },
    { tr: "Nash Dengesi", en: "Nash Equilibrium" },
    { tr: "Görünmez El", en: "The Invisible Hand" },
    { tr: "Gresham Yasası", en: "Gresham's Law" },
    { tr: "Lale Çılgınlığı", en: "Tulip Mania" },
    { tr: "Kara Kuğu Teorisi", en: "The Black Swan Theory" },
    { tr: "Fırsat Maliyeti", en: "Opportunity Cost" },
    { tr: "Pareto İlkesi (80/20)", en: "The Pareto Principle" },
    { tr: "Arz ve Talep Yasası", en: "Law of Supply and Demand" },
    { tr: "Azalan Verimler Yasası", en: "Law of Diminishing Returns" },
    { tr: "Karşılaştırmalı Üstünlük", en: "Comparative Advantage" },
    { tr: "Ölçek Ekonomileri", en: "Economies of Scale" },
    { tr: "Hiperenflasyon", en: "Hyperinflation" },
    { tr: "Stagflasyon", en: "Stagflation" },
    { tr: "Ahlaki Tehlike", en: "Moral Hazard" },
    { tr: "Ters Seçim", en: "Adverse Selection" },
    { tr: "Limon Piyasası (Bilgi Asimetrisi)", en: "The Market for Lemons" },
    { tr: "Goodhart Yasası", en: "Goodhart's Law" },
    { tr: "Veblen Malları", en: "Veblen Goods" },
    { tr: "Giffen Malları", en: "Giffen Goods" },
    { tr: "Yaratıcı Yıkım", en: "Creative Destruction" },
    { tr: "Keynesyen Çarpan Etkisi", en: "The Keynesian Multiplier" },
    { tr: "Phillips Eğrisi", en: "The Phillips Curve" },
    { tr: "Laffer Eğrisi", en: "The Laffer Curve" },
    { tr: "Gini Katsayısı", en: "Gini Coefficient" },
    { tr: "Hollanda Hastalığı", en: "Dutch Disease" },
    { tr: "Güney Denizi Balonu", en: "The South Sea Bubble" },
    { tr: "2008 Mortgage Krizi", en: "The 2008 Subprime Crisis" },
    { tr: "Dürtme Kuramı", en: "Nudge Theory" },
    { tr: "Coase Teoremi", en: "The Coase Theorem" },
    { tr: "Etkin Piyasa Hipotezi", en: "The Efficient Market Hypothesis" },
    { tr: "Bretton Woods Sistemi", en: "The Bretton Woods System" },
    { tr: "Azalan Marjinal Fayda Yasası", en: "The Law of Diminishing Marginal Utility" },
    { tr: "Say Yasası", en: "Say's Law" }
  ],
  advertising: [
    { tr: "Konumlandırma Stratejisi", en: "Positioning Strategy" },
    { tr: "AIDA Modeli", en: "AIDA Model" },
    { tr: "Çapa Etkisi", en: "The Anchoring Effect" },
    { tr: "Sosyal Kanıt İlkesi", en: "Social Proof Principle" },
    { tr: "Kıtlık Psikolojisi", en: "The Scarcity Principle" },
    { tr: "Mavi Okyanus Stratejisi", en: "Blue Ocean Strategy" },
    { tr: "1.000 Gerçek Hayran", en: "1,000 True Fans" },
    { tr: "Gündem Belirleme Kuramı", en: "Agenda-Setting Theory" },
    { tr: "Karşılıklılık İlkesi", en: "The Reciprocity Principle" },
    { tr: "Tutarlılık ve Bağlılık İlkesi", en: "Commitment and Consistency" },
    { tr: "Otorite İlkesi", en: "The Authority Principle" },
    { tr: "Sevilirlik İlkesi", en: "The Liking Principle" },
    { tr: "Benzersiz Satış Önerisi", en: "Unique Selling Proposition" },
    { tr: "Marka Kişiliği", en: "Brand Personality" },
    { tr: "Zihinsel Kullanılabilirlik", en: "Mental Availability" },
    { tr: "Yeniden Hedefleme", en: "Retargeting" },
    { tr: "Satın Alma Hunisi", en: "The Purchase Funnel" },
    { tr: "Yeniliklerin Yayılımı", en: "Diffusion of Innovations" },
    { tr: "Uçurumu Aşmak", en: "Crossing the Chasm" },
    { tr: "İki Aşamalı Akış Kuramı", en: "Two-Step Flow of Communication" },
    { tr: "Suskunluk Sarmalı", en: "The Spiral of Silence" },
    { tr: "Ekme Kuramı", en: "Cultivation Theory" },
    { tr: "Kullanımlar ve Doyumlar Kuramı", en: "Uses and Gratifications Theory" },
    { tr: "Medyada Çerçeveleme", en: "Media Framing" },
    { tr: "Kapı Aralama Tekniği", en: "Foot-in-the-Door Technique" },
    { tr: "Yüze Kapı Çarpma Tekniği", en: "Door-in-the-Face Technique" },
    { tr: "Tuzak Seçenek Etkisi", en: "The Decoy Effect" },
    { tr: "Sıfır Fiyat Etkisi", en: "The Zero Price Effect" },
    { tr: "Von Restorff Etkisi", en: "The Von Restorff Effect" },
    { tr: "Sürü Psikolojisi", en: "The Bandwagon Effect" },
    { tr: "Ethos, Pathos, Logos", en: "Ethos, Pathos, Logos" },
    { tr: "Marka Sermayesi", en: "Brand Equity" },
    { tr: "Uzun Kuyruk", en: "The Long Tail" },
    { tr: "Kayıp Lider Fiyatlandırma", en: "Loss Leader Pricing" }
  ],
  art: [
    { tr: "Kontraposto", en: "Contrapposto" },
    { tr: "Kiaroskuro (Işık-Gölge)", en: "Chiaroscuro Technique" },
    { tr: "Bauhaus Hareketi", en: "The Bauhaus Movement" },
    { tr: "Sfumato Tekniği", en: "Sfumato" },
    { tr: "Dadaizm ve Hazır-Nesne", en: "Dadaism and Ready-Made Art" },
    { tr: "Wabi-Sabi Estetiği", en: "Wabi-Sabi Aesthetic" },
    { tr: "Kintsugi Felsefesi", en: "Kintsugi Gold Repair" },
    { tr: "Çizgisel Perspektif", en: "Linear Perspective" },
    { tr: "Üçler Kuralı", en: "Rule of Thirds" },
    { tr: "Negatif Alan", en: "Negative Space" },
    { tr: "Tenebrizm", en: "Tenebrism" },
    { tr: "İzlenimcilik", en: "Impressionism" },
    { tr: "Post-İzlenimcilik", en: "Post-Impressionism" },
    { tr: "Kübizm", en: "Cubism" },
    { tr: "Dışavurumculuk", en: "Expressionism" },
    { tr: "Sürrealizm", en: "Surrealism" },
    { tr: "Fütürizm", en: "Futurism" },
    { tr: "Soyut Dışavurumculuk", en: "Abstract Expressionism" },
    { tr: "Pop Art", en: "Pop Art" },
    { tr: "Minimalizm", en: "Minimalism" },
    { tr: "Barok Sanat", en: "Baroque Art" },
    { tr: "Rokoko", en: "Rococo" },
    { tr: "Art Nouveau", en: "Art Nouveau" },
    { tr: "Art Deco", en: "Art Deco" },
    { tr: "Ukiyo-e Baskıları", en: "Ukiyo-e" },
    { tr: "Sumi-e Mürekkep Resmi", en: "Sumi-e" },
    { tr: "Trompe-l'oeil (Göz Aldatmacası)", en: "Trompe-l'oeil" },
    { tr: "Vanitas Sembolizmi", en: "Vanitas" },
    { tr: "Fresk Tekniği", en: "Fresco" },
    { tr: "Auranın Yitimi", en: "The Work of Art in the Age of Mechanical Reproduction" },
    { tr: "Anamorfoz", en: "Anamorphosis" },
    { tr: "Pentimento", en: "Pentimento" },
    { tr: "Sanatta Mimesis", en: "Mimesis in Art" },
    { tr: "Gestalt Görsel Algı İlkeleri", en: "Gestalt Principles of Perception" }
  ],
  law: [
    { tr: "Masumiyet Karinesi", en: "Presumption of Innocence" },
    { tr: "Habeas Corpus Güvencesi", en: "Habeas Corpus" },
    { tr: "Suç ve Cezanın Kanuniliği", en: "Nullum Crimen Sine Lege" },
    { tr: "Kuvvetler Ayrılığı İlkesi", en: "Separation of Powers" },
    { tr: "Miranda Hakları", en: "Miranda Rights" },
    { tr: "Jus Cogens (Emredici Normlar)", en: "Jus Cogens Norms" },
    { tr: "Orantılılık İlkesi", en: "Principle of Proportionality" },
    { tr: "Hukukun Üstünlüğü", en: "The Rule of Law" },
    { tr: "Kanun Önünde Eşitlik", en: "Equality Before the Law" },
    { tr: "Adil Yargılanma Hakkı", en: "Right to a Fair Trial" },
    { tr: "Şüpheden Sanık Yararlanır", en: "In Dubio Pro Reo" },
    { tr: "Aynı Suçtan İki Kez Yargılanmama", en: "Double Jeopardy" },
    { tr: "Geriye Yürümezlik İlkesi", en: "Non-Retroactivity of Law" },
    { tr: "Zehirli Ağacın Meyvesi", en: "Fruit of the Poisonous Tree" },
    { tr: "Emsal Karara Bağlılık", en: "Stare Decisis" },
    { tr: "Sözleşme Serbestisi", en: "Freedom of Contract" },
    { tr: "Ahde Vefa İlkesi", en: "Pacta Sunt Servanda" },
    { tr: "İyi Niyet İlkesi", en: "Principle of Good Faith" },
    { tr: "Hakkın Kötüye Kullanılması Yasağı", en: "Abuse of Rights" },
    { tr: "Mücbir Sebep", en: "Force Majeure" },
    { tr: "Kusursuz Sorumluluk", en: "Strict Liability" },
    { tr: "Meşru Müdafaa", en: "Self-Defence" },
    { tr: "Zamanaşımı", en: "Statute of Limitations" },
    { tr: "Anayasa Yargısı", en: "Judicial Review" },
    { tr: "Yargı Bağımsızlığı", en: "Judicial Independence" },
    { tr: "Nürnberg İlkeleri", en: "The Nuremberg Principles" },
    { tr: "Cenevre Sözleşmeleri", en: "The Geneva Conventions" },
    { tr: "İnsan Hakları Evrensel Beyannamesi", en: "Universal Declaration of Human Rights" },
    { tr: "Unutulma Hakkı", en: "The Right to Be Forgotten" },
    { tr: "Cezaların Şahsiliği İlkesi", en: "Personal Nature of Criminal Responsibility" },
    { tr: "Kesin Hüküm", en: "Res Judicata" },
    { tr: "Kendini Suçlamama İlkesi", en: "Nemo Tenetur Se Ipsum Accusare" },
    { tr: "Ultra Vires Doktrini", en: "Ultra Vires Doctrine" },
    { tr: "Lex Specialis İlkesi", en: "Lex Specialis Derogat Legi Generali" }
  ],
  astronomy: [
    { tr: "Olay Ufku", en: "The Event Horizon" },
    { tr: "Fermi Paradoksu", en: "The Fermi Paradox" },
    { tr: "Büyük Patlama", en: "The Big Bang Theory" },
    { tr: "Drake Denklemi", en: "The Drake Equation" },
    { tr: "Nötron Yıldızları ve Pulsarlar", en: "Neutron Stars & Pulsars" },
    { tr: "Hubble-Lemaître Yasası", en: "Hubble's Law" },
    { tr: "Soluk Mavi Nokta", en: "Pale Blue Dot" },
    { tr: "Kozmik Mikrodalga Arka Plan Işıması", en: "Cosmic Microwave Background" },
    { tr: "Kepler Yasaları", en: "Kepler's Laws of Planetary Motion" },
    { tr: "Kütleçekimsel Merceklenme", en: "Gravitational Lensing" },
    { tr: "Kütleçekim Dalgaları", en: "Gravitational Waves" },
    { tr: "Roche Limiti", en: "The Roche Limit" },
    { tr: "Chandrasekhar Limiti", en: "The Chandrasekhar Limit" },
    { tr: "Süpernova Patlamaları", en: "Supernovae" },
    { tr: "Kara Delik Bilgi Paradoksu", en: "Black Hole Information Paradox" },
    { tr: "Hawking Işıması", en: "Hawking Radiation" },
    { tr: "Solucan Delikleri", en: "Wormholes" },
    { tr: "Karanlık Madde", en: "Dark Matter" },
    { tr: "Karanlık Enerji", en: "Dark Energy" },
    { tr: "Kozmik Enflasyon", en: "Cosmic Inflation" },
    { tr: "Yaşanabilir Bölge", en: "The Habitable Zone" },
    { tr: "Kırmızı Devler ve Beyaz Cüceler", en: "Red Giants and White Dwarfs" },
    { tr: "Hertzsprung-Russell Diyagramı", en: "Hertzsprung-Russell Diagram" },
    { tr: "Oort Bulutu", en: "The Oort Cloud" },
    { tr: "Kuiper Kuşağı", en: "The Kuiper Belt" },
    { tr: "Lagrange Noktaları", en: "Lagrange Points" },
    { tr: "Kütleçekimsel Sapan Manevrası", en: "Gravity Assist" },
    { tr: "Güneş Rüzgârı ve Manyetosfer", en: "Solar Wind and the Magnetosphere" },
    { tr: "Gelgit Kilitlenmesi", en: "Tidal Locking" },
    { tr: "Büyük Filtre", en: "The Great Filter" },
    { tr: "Olbers Paradoksu", en: "Olbers' Paradox" },
    { tr: "Kozmik Uzaklık Merdiveni", en: "The Cosmic Distance Ladder" },
    { tr: "Ötegezegen Geçiş Yöntemi", en: "The Transit Method" },
    { tr: "Kardashev Ölçeği", en: "The Kardashev Scale" },
    { tr: "Titius-Bode Yasası", en: "The Titius-Bode Law" }
  ],
  mathematics: [
    { tr: "Gödel'in Eksiklik Teoremi", en: "Gödel's Incompleteness Theorems" },
    { tr: "Monty Hall Problemi", en: "The Monty Hall Problem" },
    { tr: "Fibonacci Dizisi", en: "Fibonacci Sequence" },
    { tr: "Banach-Tarski Paradoksu", en: "Banach-Tarski Paradox" },
    { tr: "Fermat'nın Son Teoremi", en: "Fermat's Last Theorem" },
    { tr: "Hilbert'in Sonsuz Oteli", en: "Hilbert's Paradox of the Grand Hotel" },
    { tr: "Dört Renk Teoremi", en: "Four Color Theorem" },
    { tr: "Euler Özdeşliği", en: "Euler's Identity" },
    { tr: "Pisagor Teoremi", en: "The Pythagorean Theorem" },
    { tr: "Öklid'in Paralellik Postülatı", en: "Euclid's Parallel Postulate" },
    { tr: "Altın Oran", en: "The Golden Ratio" },
    { tr: "Pi Sayısı", en: "The Number Pi" },
    { tr: "Asal Sayıların Sonsuzluğu", en: "Euclid's Theorem on Primes" },
    { tr: "Riemann Hipotezi", en: "The Riemann Hypothesis" },
    { tr: "Goldbach Sanısı", en: "Goldbach's Conjecture" },
    { tr: "Collatz Sanısı", en: "The Collatz Conjecture" },
    { tr: "Cantor'un Köşegen Argümanı", en: "Cantor's Diagonal Argument" },
    { tr: "Sonsuzluğun Mertebeleri", en: "Cardinality of Infinite Sets" },
    { tr: "Güvercin Yuvası İlkesi", en: "The Pigeonhole Principle" },
    { tr: "Doğum Günü Paradoksu", en: "The Birthday Problem" },
    { tr: "Bayes Teoremi", en: "Bayes' Theorem" },
    { tr: "Büyük Sayılar Yasası", en: "Law of Large Numbers" },
    { tr: "Merkezi Limit Teoremi", en: "Central Limit Theorem" },
    { tr: "Benford Yasası", en: "Benford's Law" },
    { tr: "Simpson Paradoksu", en: "Simpson's Paradox" },
    { tr: "Fraktal Geometri", en: "Fractal Geometry" },
    { tr: "Mandelbrot Kümesi", en: "The Mandelbrot Set" },
    { tr: "Möbius Şeridi", en: "The Möbius Strip" },
    { tr: "Königsberg'in Yedi Köprüsü", en: "Seven Bridges of Königsberg" },
    { tr: "Minimaks Teoremi", en: "The Minimax Theorem" },
    { tr: "Fourier Dönüşümü", en: "The Fourier Transform" },
    { tr: "Öklid Algoritması", en: "The Euclidean Algorithm" },
    { tr: "Sonsuz Maymun Teoremi", en: "The Infinite Monkey Theorem" },
    { tr: "Topolojik Eşdeğerlik", en: "Topological Equivalence" },
    { tr: "Ramsey Kuramı", en: "Ramsey Theory" }
  ],
  health: [
    { tr: "CRISPR-Cas9 Gen Düzenleme", en: "CRISPR-Cas9 Gene Editing" },
    { tr: "Plasebo ve Nosebo Etkisi", en: "Placebo & Nocebo Effect" },
    { tr: "Sirkadiyen Ritim", en: "Circadian Rhythm Biology" },
    { tr: "Doğal Seçilim", en: "Natural Selection" },
    { tr: "Nöroplastisite", en: "Neuroplasticity" },
    { tr: "Epigenetik Kalıtım", en: "Epigenetic Regulation" },
    { tr: "Apoptoz", en: "Apoptosis" },
    { tr: "Telomerler ve Hücresel Yaşlanma", en: "Telomeres & Cellular Aging" },
    { tr: "Bağışıklık Hafızası", en: "Immunological Memory" },
    { tr: "Sürü Bağışıklığı", en: "Herd Immunity" },
    { tr: "Otoimmünite", en: "Autoimmunity" },
    { tr: "Antibiyotik Direnci", en: "Antibiotic Resistance" },
    { tr: "Bağırsak-Beyin Ekseni", en: "The Gut-Brain Axis" },
    { tr: "Otofaji", en: "Autophagy" },
    { tr: "Homeostaz", en: "Homeostasis" },
    { tr: "Genel Uyum Sendromu", en: "General Adaptation Syndrome" },
    { tr: "Kan-Beyin Bariyeri", en: "The Blood-Brain Barrier" },
    { tr: "Dopamin Ödül Yolağı", en: "Dopamine Reward Pathway" },
    { tr: "Hormesis", en: "Hormesis" },
    { tr: "Bazal Metabolizma Hızı", en: "Basal Metabolic Rate" },
    { tr: "İnsülin Direnci", en: "Insulin Resistance" },
    { tr: "Hücresel Solunum", en: "Cellular Respiration" },
    { tr: "Kök Hücreler", en: "Stem Cells" },
    { tr: "Hayflick Limiti", en: "The Hayflick Limit" },
    { tr: "Jenner ve Aşının Keşfi", en: "Edward Jenner and Vaccination" },
    { tr: "Semmelweis Refleksi", en: "The Semmelweis Reflex" },
    { tr: "Mikrop Kuramı", en: "Germ Theory of Disease" },
    { tr: "Çift Kör Randomize Deney", en: "Double-Blind Randomised Trial" },
    { tr: "Kanıta Dayalı Tıp", en: "Evidence-Based Medicine" },
    { tr: "Mavi Bölgeler", en: "Blue Zones" },
    { tr: "DNA Çift Sarmalı", en: "The DNA Double Helix" },
    { tr: "Moleküler Biyolojinin Merkezi Dogması", en: "The Central Dogma of Molecular Biology" },
    { tr: "Mendel Kalıtım Yasaları", en: "Mendel's Laws of Inheritance" },
    { tr: "İnsan Mikrobiyomu", en: "The Human Microbiome" },
    { tr: "Hipokrat Yemini", en: "The Hippocratic Oath" }
  ],
};

function activeCategory() {
  return settings.category || "general";
}

function currentTopicPool(category = activeCategory()) {
  return CATEGORY_TOPICS[category] || TOPICS;
}

function getResearchedSet() {
  return new Set(loadHistory().map((h) => `${h.tr}|${h.en}`));
}

function availableTopicPool(category = activeCategory()) {
  const fullPool = currentTopicPool(category);
  const researched = getResearchedSet();
  const fresh = fullPool.filter((t) => !researched.has(`${t.tr}|${t.en}`));
  // Çekmecedeki tüm kavramlar tamamlandıysa havuz sıfırlanıp tekrar kullanılabilir olsun
  return fresh.length ? fresh : fullPool;
}

function setCategory(id) {
  if (activeCategory() === id) return;
  settings.category = id;
  saveSettings();
  render();
}

function shuffleArray(arr) {
  const res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

function pickTopic() {
  const pool = availableTopicPool();
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateWheelItems(pool, targetTopic = null, targetIndex = -1) {
  if (!pool.length) return [];
  const minItems = 160;
  const repeatCount = Math.max(10, Math.ceil(minItems / pool.length));
  let list = [];
  for (let r = 0; r < repeatCount; r++) {
    list.push(...shuffleArray(pool));
  }
  if (targetTopic && targetIndex >= 0 && targetIndex < list.length) {
    list[targetIndex] = targetTopic;
  }
  return list;
}

function getWheelItemHeight() {
  const root = document.documentElement;
  const val = getComputedStyle(root).getPropertyValue("--wheel-item").trim();
  const parsed = parseFloat(val);
  return parsed > 0 ? parsed : 62;
}

function getWheelInitialOffset(pool) {
  const itemHeight = getWheelItemHeight();
  const startIndex = Math.min(pool.length * 2, 30);
  return Math.max(0, (startIndex - 2) * itemHeight);
}

function spin() {
  if (state.spinning) return;
  wakeUpPet(8000);
  sfx.init();
  state.spinning = true;

  const itemHeight = getWheelItemHeight();
  const pool = availableTopicPool();
  const finalTopic = pickTopic();
  const spinLoops = Math.max(5, Math.ceil(70 / Math.max(pool.length, 1)));
  const targetIndex = (spinLoops * pool.length) + Math.floor(Math.random() * pool.length);
  const centerIdx = 2;
  const offset = (targetIndex - centerIdx) * itemHeight;

  // Her spinde kavramların sırasını tamamen karıştır ve hedefi targetIndex'e yerleştir
  const wheelItems = generateWheelItems(pool, finalTopic, targetIndex);
  
  render();

  const track = document.querySelector("#wheelTrack");
  const viewport = document.querySelector("#wheelViewport");
  if (!track || !viewport) {
    state.spinning = false;
    render();
    return;
  }

  // Yeni karıştırılmış listeyi çarka uygula
  track.innerHTML = wheelItems.map(
    (t) => `<li><b>${esc(t.tr)}</b><small>${esc(t.en)}</small></li>`
  ).join("");

  // Sound ticking during roulette spin
  let tickCount = 0;
  const tickInterval = setInterval(() => {
    tickCount++;
    sfx.playTick();
    if (tickCount > 24) clearInterval(tickInterval);
  }, 100);

  const startOffset = getWheelInitialOffset(pool);
  track.style.transition = "none";
  track.style.transform = `translateY(-${startOffset}px)`;
  void track.offsetHeight; // reflow
  track.style.transition = "transform 2.6s cubic-bezier(0.12, 0.7, 0.1, 1)";
  track.style.transform = `translateY(-${offset}px)`;

  setTimeout(() => {
    clearInterval(tickInterval);
    sfx.playLand();
    state.spinning = false;
    state.topic = finalTopic;
    state.phase = "landed";
    render();
  }, 2700);
}

function completeResearch() {
  clearInterval(state.timerId);
  const notesEl = document.querySelector("#researchNotesInput");
  if (notesEl) state.notes = notesEl.value;
  addToHistory(state.topic, activeCategory(), state.notes);
  state.phase = "done";
  render();
}

function startResearch() {
  state.phase = "researching";
  state.notes = "";
  render();
  startCountdown(settings.researchMinutes * 60, completeResearch);
}

function resetToIdle() {
  clearInterval(state.timerId);
  state.phase = "idle";
  state.topic = null;
  state.notes = "";
  render();
}

function persistSession() {
  if (state.phase === "idle") {
    try { sessionStorage.removeItem(SESSION_KEY); } catch { /* ignore */ }
    return;
  }
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      phase: state.phase,
      topic: state.topic,
      remaining: state.remaining,
      totalForPhase: state.totalForPhase,
      paused: !!state.paused,
      notes: state.notes || "",
      savedAt: Date.now()
    }));
  } catch { /* ignore */ }
}

function restoreSession() {
  let raw;
  try { raw = sessionStorage.getItem(SESSION_KEY); } catch { return false; }
  if (!raw) return false;

  let saved;
  try { saved = JSON.parse(raw); } catch { return false; }
  if (!saved || !saved.topic || !saved.phase || saved.phase === "idle") return false;

  state.topic = saved.topic;
  state.notes = saved.notes || "";

  if (saved.phase === "landed" || saved.phase === "done") {
    state.phase = saved.phase;
    render();
    return true;
  }

  if (saved.phase === "researching") {
    const elapsed = saved.paused ? 0 : Math.max(0, Math.round((Date.now() - saved.savedAt) / 1000));
    const remaining = Math.max(0, (saved.remaining || 0) - elapsed);
    const total = saved.totalForPhase || remaining;

    if (remaining <= 0) {
      completeResearch();
      return true;
    }

    state.phase = "researching";
    startCountdown(total, completeResearch, remaining);
    state.paused = !!saved.paused;
    render();
    return true;
  }

  return false;
}

// ---------- UI Rendering ----------
function render() {
  const prevTabs = document.querySelector(".category-tabs");
  const prevScroll = prevTabs ? prevTabs.scrollLeft : 0;

  if (state.phase === "idle") stage.innerHTML = renderIdle();
  else if (state.phase === "landed") stage.innerHTML = renderLanded();
  else if (state.phase === "researching") stage.innerHTML = renderResearching();
  else if (state.phase === "done") stage.innerHTML = renderDone();

  bindStageEvents();

  const newTabs = document.querySelector(".category-tabs");
  if (newTabs && prevScroll > 0) {
    newTabs.scrollLeft = prevScroll;
  }

  updateTimerDisplay();
  persistSession();
}

function categoryIcon(cat) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${cat.icon}</svg>`;
}

function renderCategoryTabs() {
  const active = activeCategory();
  const tabs = CATEGORIES.map((c) => {
    const selected = c.id === active;
    return `
      <button type="button" class="cat-pill${selected ? " is-active" : ""}" data-category="${c.id}"
        aria-pressed="${selected}">
        ${categoryIcon(c)}
        <span>${c.tr}</span>
      </button>
    `;
  }).join("");
  return `<div class="tabs-scroll-area"><div class="category-tabs" role="group" aria-label="Kategori seç">${tabs}</div></div>`;
}

function renderDeskGreeting() {
  const quote = CURIOSITY_QUOTES[currentQuoteIndex % CURIOSITY_QUOTES.length];
  return `
    <!-- Günün İlham Parşömeni -->
    <div class="curiosity-parchment-card" id="quoteCard">
      <div class="parchment-header">
        <span class="parchment-tag">📜 GÜNÜN İLHAMI</span>
        <button id="nextQuoteBtn" class="parchment-cycle-btn" type="button" title="Başka bir alıntı göster ✨">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
          <span>Değiştir</span>
        </button>
      </div>
      <p class="parchment-quote" id="parchmentText">“${esc(quote.text)}”</p>
      <span class="parchment-author" id="parchmentAuthor">— ${esc(quote.author)}</span>
    </div>
  `;
}

function renderRecall() {
  const due = dueForReview();
  if (!due) return "";
  const days = Math.floor((Date.now() - due.finishedAt) / (24 * 60 * 60 * 1000));
  return `
    <div class="recall-banner">
      <div class="recall-info">
        <strong>Hatırlatma Çanı 🔔</strong>
        <span>${esc(due.tr)}</span>
        <em>${days} gün önce sandığına eklemiştin — hafızanı tazelemek ister misin?</em>
      </div>
      <div class="recall-actions">
        <button id="reviewAgainBtn" class="btn btn-primary btn-sm" type="button" data-tr="${esc(due.tr)}" data-en="${esc(due.en)}" data-category="${esc(due.category)}">Hemen Hatırla ✨</button>
        <button id="dismissReviewBtn" class="link-btn" type="button" data-key="${esc(reviewTopicKey(due))}">Sonra</button>
      </div>
    </div>
  `;
}

function renderNightcap() {
  return `
    <g class="cat-nightcap pet-nightcap">
      <path d="M 18 19 C 14 11 22 2 34 5 C 41 8 40 18 36 21 Z" fill="#c44747" stroke="#7a1c1c" stroke-width="0.8"/>
      <path d="M 33 5 Q 46 2 48 9" stroke="#c44747" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="48" cy="9.5" r="2.8" fill="#fff5ea"/>
      <path d="M 17 19 Q 27 16 37 20" stroke="#fff5ea" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    </g>
  `;
}

let petAwakeUntil = 0;
let petAwakeTimerId = null;

function isPetAwake() {
  const behavior = settings.petBehavior || "smart";
  if (behavior === "awake") return true;
  if (behavior === "sleep") return false;
  return state.phase === "researching" || state.spinning || Date.now() < petAwakeUntil;
}

function updateCozyPetDOM() {
  const cozyPetBtn = document.querySelector("#cozyCatBtn");
  if (!cozyPetBtn) return;
  const hour = new Date().getHours();
  const isNight = hour >= 22 || hour < 6;
  const currentPetType = settings.petType || "cat";
  const petCfg = PET_CONFIG[currentPetType] || PET_CONFIG.cat;
  const colorId = settings.petColor || petCfg.defaultColor;
  const colorCfg = petCfg.colors.find((c) => c.id === colorId) || petCfg.colors[0];
  const awake = isPetAwake();
  const isResearching = state.phase === "researching";

  let petSvg = "";
  if (currentPetType === "dog") {
    petSvg = renderDogSvg(colorCfg, isNight, awake, isResearching);
  } else if (currentPetType === "rabbit") {
    petSvg = renderRabbitSvg(colorCfg, isNight, awake, isResearching);
  } else if (currentPetType === "fox") {
    petSvg = renderFoxSvg(colorCfg, isNight, awake, isResearching);
  } else {
    petSvg = renderCatSvg(colorCfg, isNight, awake, isResearching);
  }

  const emotes = awake ? (petCfg.awakeEmotes || ["✨", "💡", "🐾"]) : petCfg.idleEmotes;

  cozyPetBtn.classList.toggle("is-awake", awake);
  cozyPetBtn.title = `${petCfg.name} — ${awake ? "canlı & uyanık dostun!" : "uyuyor, sevmek ve uyandırmak için tıkla! 🐾"}`;
  
  cozyPetBtn.innerHTML = `
    <span class="pet-emote cat-emote" aria-hidden="true">
      <span class="z-1">${emotes[0]}</span>
      <span class="z-2">${emotes[1]}</span>
      <span class="z-3">${emotes[2]}</span>
    </span>
    ${petSvg}
  `;
}

function wakeUpPet(durationMs = 15000) {
  const behavior = settings.petBehavior || "smart";
  if (behavior === "sleep") return;
  petAwakeUntil = Date.now() + durationMs;
  updateCozyPetDOM();
  if (petAwakeTimerId) clearTimeout(petAwakeTimerId);
  petAwakeTimerId = setTimeout(() => {
    if (!isPetAwake()) {
      updateCozyPetDOM();
    }
  }, durationMs + 100);
}

function renderCatSvg(c, isNight, isAwake = false, isResearching = false) {
  const o = c.outline || c.dark;
  return `
    <svg viewBox="0 0 96 50" class="cat-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Zemin Gölgesi -->
      <ellipse cx="48" cy="46" rx="42" ry="4" fill="rgba(0,0,0,0.28)"/>

      <!-- Kuyruk (Gövdenin arkasında zarif kıvrım) -->
      <path class="cat-tail" d="M 77 40 C 91 38 95 23 86 15 C 78 10 72 16 75 25" stroke="${o}" stroke-width="7.8" stroke-linecap="round" fill="none"/>
      <path class="cat-tail" d="M 77 40 C 91 38 95 23 86 15 C 78 10 72 16 75 25" stroke="${c.primary}" stroke-width="5.8" stroke-linecap="round" fill="none"/>
      <path class="cat-tail" d="M 85 15 C 83 12 77 14 77 20" stroke="${c.belly}" stroke-width="4.2" stroke-linecap="round" fill="none"/>

      <!-- Gövde Silueti (Belirgin Kontur Çizgili) -->
      <path class="cat-body-torso" d="M 22 44 C 17 35 20 21 36 16 C 54 10 76 13 85 26 C 91 34 89 44 82 45 C 68 46 34 46 22 44 Z" fill="${c.primary}" stroke="${o}" stroke-width="1.8" stroke-linejoin="round"/>

      <!-- Sırt & Kalça Kıvrım Çizgisi -->
      <path d="M 68 22 C 78 28 80 39 77 44" stroke="${o}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M 50 14 Q 48 21 46 25" stroke="${o}" stroke-width="2.2" stroke-linecap="round" opacity="0.55"/>
      <path d="M 60 15 Q 58 22 56 27" stroke="${o}" stroke-width="2.2" stroke-linecap="round" opacity="0.55"/>
      <path d="M 70 18 Q 68 25 65 29" stroke="${o}" stroke-width="2.2" stroke-linecap="round" opacity="0.55"/>

      <!-- Göbek (Nefes alan yumuşak karın) -->
      <ellipse class="cat-belly" cx="54" cy="36" rx="16.5" ry="9.5" fill="${c.belly}" stroke="${o}" stroke-width="1.2" opacity="0.95"/>

      <!-- Kafa -->
      <circle class="cat-head" cx="28" cy="29" r="13.5" fill="${c.primary}" stroke="${o}" stroke-width="1.8"/>

      <!-- Yanak Tüyleri -->
      <polygon points="16,31 11,33 16,36" fill="${c.primary}" stroke="${o}" stroke-width="1.4" stroke-linejoin="round"/>
      <polygon points="40,31 45,33 40,36" fill="${c.primary}" stroke="${o}" stroke-width="1.4" stroke-linejoin="round"/>

      <!-- Kırmızı Tasma & Altın Çan -->
      <path d="M 19 36 Q 28 41 37 36" stroke="#c44747" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <circle cx="28" cy="39.5" r="2" fill="#e0a94e" stroke="${o}" stroke-width="0.8"/>

      <!-- Kulaklar -->
      <polygon points="16,21 17,6 26,16" fill="${c.primary}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
      <polygon points="18,19 18,9 24,15" fill="${c.innerEar || '#f9c0a8'}" stroke="${c.dark}" stroke-width="0.8"/>

      <polygon class="cat-ear-twitch" points="29,15 36,5 42,17" fill="${c.primary}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
      <polygon class="cat-ear-twitch" points="31,14 36,8 40,16" fill="${c.innerEar || '#f9c0a8'}" stroke="${c.dark}" stroke-width="0.8"/>

      ${isNight ? renderNightcap() : ""}

      <!-- Alın Çizgileri -->
      <path d="M 28 17 L 28 21" stroke="${o}" stroke-width="1.6" stroke-linecap="round" opacity="0.5"/>
      <path d="M 24 18 L 25 21" stroke="${o}" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>
      <path d="M 32 18 L 31 21" stroke="${o}" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>

      <!-- Allıklar -->
      <ellipse cx="20" cy="32.5" rx="3.2" ry="2" fill="${c.blush}" opacity="0.6"/>
      <ellipse cx="36" cy="32.5" rx="3.2" ry="2" fill="${c.blush}" opacity="0.6"/>

      <!-- Gözler: Uyanık vs Uyuyan -->
      ${isAwake ? `
        <g class="pet-eyes-awake">
          <ellipse cx="23.5" cy="28.5" rx="3.4" ry="4" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="22.5" cy="27.3" r="1.3" fill="#ffffff"/>
          <circle cx="24.8" cy="29.8" r="0.6" fill="#ffffff"/>
          <ellipse cx="32.5" cy="28.5" rx="3.4" ry="4" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="31.5" cy="27.3" r="1.3" fill="#ffffff"/>
          <circle cx="33.8" cy="29.8" r="0.6" fill="#ffffff"/>
        </g>
      ` : `
        <path d="M 21 28.5 Q 24.5 31.5 27.5 28.5" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M 29.5 28.5 Q 32.5 31.5 35.5 28.5" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      `}

      ${isResearching ? `
        <g class="pet-glasses">
          <circle class="pet-glasses-frame" cx="23.5" cy="28.5" r="4.8"/>
          <circle class="pet-glasses-frame" cx="32.5" cy="28.5" r="4.8"/>
          <path class="pet-glasses-bridge" d="M 28 28.5 Q 28 27.5 28 28.5"/>
        </g>
      ` : ""}

      <!-- Pembe Burun & Ağız -->
      <polygon points="26.8,32.5 29.2,32.5 28,34" fill="#f2907a" stroke="${o}" stroke-width="0.7"/>
      <path d="M 26.2 34.5 Q 28 36.2 29.8 34.5" stroke="${o}" stroke-width="1.5" fill="none" stroke-linecap="round"/>

      <!-- Bıyıklar -->
      <line x1="11" y1="31" x2="19" y2="33" stroke="${o}" stroke-width="1.1" stroke-linecap="round" opacity="0.65"/>
      <line x1="11" y1="34" x2="19" y2="34.5" stroke="${o}" stroke-width="1.1" stroke-linecap="round" opacity="0.65"/>
      <line x1="36" y1="33" x2="44" y2="31" stroke="${o}" stroke-width="1.1" stroke-linecap="round" opacity="0.65"/>
      <line x1="36" y1="34.5" x2="44" y2="34" stroke="${o}" stroke-width="1.1" stroke-linecap="round" opacity="0.65"/>

      <!-- Ön Patiler -->
      <ellipse cx="23" cy="43.5" rx="6" ry="3.5" fill="${c.primary}" stroke="${o}" stroke-width="1.6"/>
      <ellipse cx="34" cy="43.5" rx="6" ry="3.5" fill="${c.primary}" stroke="${o}" stroke-width="1.6"/>
      <ellipse cx="23" cy="44" rx="2.5" ry="1.5" fill="${c.belly}"/>
      <ellipse cx="34" cy="44" rx="2.5" ry="1.5" fill="${c.belly}"/>
      <circle cx="21" cy="42.5" r="0.8" fill="#f9c0a8" stroke="${o}" stroke-width="0.4"/>
      <circle cx="23" cy="41.8" r="0.8" fill="#f9c0a8" stroke="${o}" stroke-width="0.4"/>
      <circle cx="25" cy="42.5" r="0.8" fill="#f9c0a8" stroke="${o}" stroke-width="0.4"/>
      <circle cx="32" cy="42.5" r="0.8" fill="#f9c0a8" stroke="${o}" stroke-width="0.4"/>
      <circle cx="34" cy="41.8" r="0.8" fill="#f9c0a8" stroke="${o}" stroke-width="0.4"/>
      <circle cx="36" cy="42.5" r="0.8" fill="#f9c0a8" stroke="${o}" stroke-width="0.4"/>
    </svg>
  `;
}

function renderDogSvg(c, isNight, isAwake = false, isResearching = false) {
  const o = c.outline || c.dark;
  return `
    <svg viewBox="0 0 96 50" class="dog-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Zemin Gölgesi -->
      <ellipse cx="48" cy="46" rx="42" ry="4" fill="rgba(0,0,0,0.28)"/>

      <!-- Kuyruk (Neşeyle kalkan köpek kuyruğu) -->
      <path class="dog-tail" d="M 75 40 C 87 36 94 26 89 18 C 85 14 79 17 81 25" stroke="${o}" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path class="dog-tail" d="M 75 40 C 87 36 94 26 89 18 C 85 14 79 17 81 25" stroke="${c.primary}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path class="dog-tail" d="M 87 18 C 86 16 81 17 81 22" stroke="${c.belly}" stroke-width="4.5" stroke-linecap="round" fill="none"/>

      <!-- Gövde Silueti -->
      <path d="M 23 44 C 17 35 22 21 38 17 C 56 12 76 14 85 27 C 90 35 88 44 81 45 C 67 46 35 46 23 44 Z" fill="${c.primary}" stroke="${o}" stroke-width="1.8" stroke-linejoin="round"/>

      <!-- Sırt Lekesi & Kalça Çizgisi -->
      <ellipse cx="68" cy="24" rx="10.5" ry="7" fill="${c.dark}" opacity="0.4"/>
      <path d="M 68 22 C 78 28 80 39 77 44" stroke="${o}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.6"/>

      <!-- Göbek -->
      <ellipse class="dog-belly" cx="54" cy="35" rx="15.5" ry="9.5" fill="${c.belly}" stroke="${o}" stroke-width="1.2" opacity="0.95"/>

      <!-- Kafa -->
      <circle cx="28" cy="28.5" r="13.5" fill="${c.primary}" stroke="${o}" stroke-width="1.8"/>

      <!-- Kulaklar (Kafanın yanlarından doğal sarkan sevimli köpek kulakları) -->
      <!-- Sol Kulak -->
      <path d="M 17 19 C 11 19 10 30 14 34 C 18 36 21 28 21 22 Z" fill="${c.dark}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
      <!-- Sağ Kulak (Seğiren) -->
      <path class="dog-ear-flop" d="M 36 18 C 43 18 45 29 40 34 C 36 36 34 26 34 21 Z" fill="${c.dark}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>

      <!-- Mavi Köpek Tasması & Altın Madalyon -->
      <path d="M 19 36 Q 28 41 37 36" stroke="#3b7cc4" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <circle cx="28" cy="39.5" r="2" fill="#e0a94e" stroke="${o}" stroke-width="0.8"/>

      ${isNight ? renderNightcap() : ""}

      <!-- Sevimli Ağız / Burun Bölgesi (Muzzle Ovali) -->
      <ellipse cx="28" cy="33" rx="7.5" ry="5.2" fill="${c.belly}" stroke="${o}" stroke-width="1.2"/>

      <!-- Allıklar -->
      <ellipse cx="19" cy="32.5" rx="3.2" ry="2" fill="${c.blush}" opacity="0.6"/>
      <ellipse cx="37" cy="32.5" rx="3.2" ry="2" fill="${c.blush}" opacity="0.6"/>

      <!-- Gözler: Uyanık vs Uyuyan -->
      ${isAwake ? `
        <g class="pet-eyes-awake">
          <ellipse cx="23" cy="27.5" rx="3.5" ry="4.2" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="22" cy="26.3" r="1.4" fill="#ffffff"/>
          <circle cx="24.3" cy="29" r="0.7" fill="#ffffff"/>
          <ellipse cx="33" cy="27.5" rx="3.5" ry="4.2" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="32" cy="26.3" r="1.4" fill="#ffffff"/>
          <circle cx="34.3" cy="29" r="0.7" fill="#ffffff"/>
        </g>
      ` : `
        <path d="M 20.5 27.5 Q 23.5 30 26.5 27.5" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M 29.5 27.5 Q 32.5 30 35.5 27.5" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      `}

      ${isResearching ? `
        <g class="pet-glasses">
          <circle class="pet-glasses-frame" cx="23" cy="27.5" r="4.8"/>
          <circle class="pet-glasses-frame" cx="33" cy="27.5" r="4.8"/>
          <path class="pet-glasses-bridge" d="M 27.8 27.5 Q 28 26.5 28.2 27.5"/>
        </g>
      ` : ""}

      <!-- Parlak Siyah Burun -->
      <ellipse cx="28" cy="31.2" rx="2.5" ry="1.7" fill="#1b120c" stroke="${o}" stroke-width="0.6"/>
      <circle cx="27.4" cy="30.7" r="0.7" fill="#ffffff" opacity="0.9"/>

      <!-- Ağız / Sevimli Pembe Dil -->
      ${isAwake ? `
        <path d="M 26 33.8 Q 28 35.2 30 33.8" stroke="${o}" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <path d="M 26.8 34.5 C 26.8 37.5 29.2 37.5 29.2 34.5 Z" fill="#f88e9e" stroke="${o}" stroke-width="0.7"/>
      ` : `
        <path d="M 25.8 33.8 Q 28 35.5 30.2 33.8" stroke="${o}" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      `}

      <!-- Patiler -->
      <ellipse cx="23" cy="43.5" rx="6.5" ry="3.5" fill="${c.primary}" stroke="${o}" stroke-width="1.6"/>
      <ellipse cx="34" cy="43.5" rx="6.5" ry="3.5" fill="${c.primary}" stroke="${o}" stroke-width="1.6"/>
      <ellipse cx="23" cy="44" rx="2.5" ry="1.5" fill="${c.belly}"/>
      <ellipse cx="34" cy="44" rx="2.5" ry="1.5" fill="${c.belly}"/>
      <circle cx="21" cy="42.5" r="0.8" fill="#d48888" stroke="${o}" stroke-width="0.4"/>
      <circle cx="23" cy="41.8" r="0.8" fill="#d48888" stroke="${o}" stroke-width="0.4"/>
      <circle cx="25" cy="42.5" r="0.8" fill="#d48888" stroke="${o}" stroke-width="0.4"/>
      <circle cx="32" cy="42.5" r="0.8" fill="#d48888" stroke="${o}" stroke-width="0.4"/>
      <circle cx="34" cy="41.8" r="0.8" fill="#d48888" stroke="${o}" stroke-width="0.4"/>
      <circle cx="36" cy="42.5" r="0.8" fill="#d48888" stroke="${o}" stroke-width="0.4"/>
    </svg>
  `;
}

function renderRabbitSvg(c, isNight, isAwake = false, isResearching = false) {
  const o = c.outline || c.dark;
  return `
    <svg viewBox="0 0 96 50" class="rabbit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Zemin Gölgesi -->
      <ellipse cx="48" cy="46" rx="40" ry="4" fill="rgba(0,0,0,0.28)"/>

      <!-- Pofuduk Ponpon Kuyruk -->
      <ellipse class="rabbit-tail" cx="80" cy="35" rx="7.2" ry="6.5" fill="${c.belly}" stroke="${o}" stroke-width="1.6"/>

      <!-- Dik ve Sevimli Tavşan Kulakları (Gerçek Tavşan Anatomisi: Yukarı Doğru Uzanan Kulaklar) -->
      <!-- Sol Kulak -->
      <path d="M 22 18 C 20 4 26 1 29 6 C 31 11 30 16 28 20 Z" fill="${c.primary}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M 23.5 16 C 22 6 26 4 27.5 8 C 28.5 12 28 15 26.5 17 Z" fill="${c.innerEar || '#fde8ec'}" stroke="${c.dark}" stroke-width="0.8"/>

      <!-- Sağ Kulak (Tatlı Seğirme Açısı) -->
      <g class="rabbit-ear-twitch">
        <path d="M 28 18 C 30 3 37 2 39 7 C 40 13 37 17 34 20 Z" fill="${c.primary}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M 30 16 C 31.5 5 36 5 37 9 C 38 13 36 15 33.5 17 Z" fill="${c.innerEar || '#fde8ec'}" stroke="${c.dark}" stroke-width="0.8"/>
      </g>

      <!-- Gövde -->
      <path d="M 22 43 C 16 34 20 21 36 16 C 54 10 74 15 83 27 C 88 35 86 44 79 45 C 65 46 34 46 22 43 Z" fill="${c.primary}" stroke="${o}" stroke-width="1.8" stroke-linejoin="round"/>

      <!-- Kalça Çizgisi -->
      <path d="M 67 22 C 77 27 79 38 76 44" stroke="${o}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.6"/>

      <!-- Göbek -->
      <ellipse class="rabbit-belly" cx="52" cy="36" rx="15.5" ry="9" fill="${c.belly}" stroke="${o}" stroke-width="1.2" opacity="0.95"/>

      <!-- Kafa -->
      <circle cx="28" cy="29" r="13.5" fill="${c.primary}" stroke="${o}" stroke-width="1.8"/>

      <!-- Pofuduk Yanak Tüyleri -->
      <polygon points="16,31 11,33 16,36" fill="${c.primary}" stroke="${o}" stroke-width="1.4" stroke-linejoin="round"/>
      <polygon points="40,31 45,33 40,36" fill="${c.primary}" stroke="${o}" stroke-width="1.4" stroke-linejoin="round"/>

      ${isNight ? renderNightcap() : ""}

      <!-- Allıklar -->
      <ellipse cx="20" cy="33" rx="3.5" ry="2.2" fill="${c.blush}" opacity="0.65"/>
      <ellipse cx="36" cy="33" rx="3.5" ry="2.2" fill="${c.blush}" opacity="0.65"/>

      <!-- Gözler: Uyanık vs Uyuyan -->
      ${isAwake ? `
        <g class="pet-eyes-awake">
          <ellipse cx="23.5" cy="28" rx="3.6" ry="4.3" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="22.5" cy="26.7" r="1.4" fill="#ffffff"/>
          <circle cx="24.8" cy="29.5" r="0.7" fill="#ffffff"/>
          <ellipse cx="32.5" cy="28" rx="3.6" ry="4.3" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="31.5" cy="26.7" r="1.4" fill="#ffffff"/>
          <circle cx="33.8" cy="29.5" r="0.7" fill="#ffffff"/>
        </g>
      ` : `
        <path d="M 21 28 Q 24.5 31 27.5 28" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M 28.5 28 Q 31.5 31 35 28" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      `}

      ${isResearching ? `
        <g class="pet-glasses">
          <circle class="pet-glasses-frame" cx="23.5" cy="28" r="4.8"/>
          <circle class="pet-glasses-frame" cx="32.5" cy="28" r="4.8"/>
          <path class="pet-glasses-bridge" d="M 28 28 Q 28 27 28 28"/>
        </g>
      ` : ""}

      <!-- Tavşan Burnu & Sevimli Y-Ağız -->
      <g class="rabbit-nose">
        <polygon points="26.8,32 29.2,32 28,33.6" fill="#f48ca2" stroke="${o}" stroke-width="0.8"/>
        <path d="M 28 33.6 L 28 35 M 28 35 Q 26.2 36.5 24.5 35 M 28 35 Q 29.8 36.5 31.5 35" stroke="${o}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      </g>

      <!-- İnce Tavşan Bıyıkları -->
      <line x1="11" y1="32" x2="19" y2="33.5" stroke="${o}" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
      <line x1="11" y1="35" x2="19" y2="35" stroke="${o}" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
      <line x1="37" y1="33.5" x2="45" y2="32" stroke="${o}" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
      <line x1="37" y1="35" x2="45" y2="35" stroke="${o}" stroke-width="1" stroke-linecap="round" opacity="0.6"/>

      <!-- Ön Patiler -->
      <ellipse cx="23" cy="43.5" rx="5.5" ry="3.2" fill="${c.belly}" stroke="${o}" stroke-width="1.5"/>
      <ellipse cx="33" cy="43.5" rx="5.5" ry="3.2" fill="${c.belly}" stroke="${o}" stroke-width="1.5"/>
      <circle cx="21" cy="43" r="0.7" fill="#f48ca2" stroke="${o}" stroke-width="0.4"/>
      <circle cx="23" cy="42.3" r="0.7" fill="#f48ca2" stroke="${o}" stroke-width="0.4"/>
      <circle cx="25" cy="43" r="0.7" fill="#f48ca2" stroke="${o}" stroke-width="0.4"/>
      <circle cx="31" cy="43" r="0.7" fill="#f48ca2" stroke="${o}" stroke-width="0.4"/>
      <circle cx="33" cy="42.3" r="0.7" fill="#f48ca2" stroke="${o}" stroke-width="0.4"/>
      <circle cx="35" cy="43" r="0.7" fill="#f48ca2" stroke="${o}" stroke-width="0.4"/>
    </svg>
  `;
}

function renderFoxSvg(c, isNight, isAwake = false, isResearching = false) {
  const o = c.outline || c.dark;
  return `
    <svg viewBox="0 0 96 50" class="fox-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Zemin Gölgesi -->
      <ellipse cx="48" cy="46" rx="42" ry="4" fill="rgba(0,0,0,0.28)"/>

      <!-- Muhteşem Pofuduk Tilki Kuyruğu (Arka / Sağ tarafta kıvrılan kabarık kuyruk) -->
      <g class="fox-tail">
        <!-- Kuyruk Ana Gövdesi (Kabarık Form) -->
        <path d="M 68 38 C 76 43 89 44 93 33 C 96 22 93 11 83 9 C 74 7 66 14 68 24 C 70 30 63 34 68 38 Z" fill="${c.primary}" stroke="${o}" stroke-width="1.8" stroke-linejoin="round"/>
        
        <!-- Kuyruk Ucu Beyazlığı (Klasik Beyaz Uç - Doğal Tüy Geçişli) -->
        <path d="M 83 9 C 93 11 96 22 93 33 C 89 31 87 26 89 22 C 86 21 84 17 87 14 C 83 13 82 10 83 9 Z" fill="${c.belly}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
        
        <!-- Kuyruk İçi Tüy Detay Çizgisi -->
        <path d="M 76 17 C 82 19 86 26 84 34" stroke="${o}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.45"/>
      </g>

      <!-- Kıvrılmış Tilki Gövdesi (Net Konturlu) -->
      <path d="M 22 43 C 17 33 20 19 38 15 C 56 11 74 14 82 25 C 87 34 85 44 78 45 C 64 46 34 46 22 43 Z" fill="${c.primary}" stroke="${o}" stroke-width="1.8" stroke-linejoin="round"/>

      <!-- Kalça Çizgisi -->
      <path d="M 65 21 C 74 27 76 38 73 44" stroke="${o}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.6"/>

      <!-- Göbek -->
      <ellipse class="fox-belly" cx="50" cy="35" rx="14.5" ry="9" fill="${c.belly}" stroke="${o}" stroke-width="1.2" opacity="0.95"/>

      <!-- Kafa & Yanak Beyazlıkları (Maske) -->
      <circle cx="28" cy="28.5" r="13" fill="${c.primary}" stroke="${o}" stroke-width="1.8"/>
      <!-- Sol Yanak Tüyü -->
      <polygon points="15,31 10,33 15,36" fill="${c.primary}" stroke="${o}" stroke-width="1.4" stroke-linejoin="round"/>
      <!-- Sağ Yanak Tüyü -->
      <polygon points="41,31 46,33 41,36" fill="${c.primary}" stroke="${o}" stroke-width="1.4" stroke-linejoin="round"/>
      <!-- Yanak ve Çene Beyazlığı -->
      <path d="M 16 29 Q 28 38 40 29 Q 28 35 16 29 Z" fill="${c.belly}" stroke="${o}" stroke-width="1"/>

      <!-- Sivri Tilki Kulakları -->
      <polygon points="15,19 16,3 25,15" fill="${c.dark}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
      <polygon points="17,17 18,7 23,14" fill="${c.innerEar || '#fdd9c4'}" stroke="${o}" stroke-width="0.8"/>
      <g class="fox-ear-twitch">
        <polygon points="27,14 34,2 39,16" fill="${c.dark}" stroke="${o}" stroke-width="1.6" stroke-linejoin="round"/>
        <polygon points="29,13 34,6 37,15" fill="${c.innerEar || '#fdd9c4'}" stroke="${o}" stroke-width="0.8"/>
      </g>

      ${isNight ? renderNightcap() : ""}

      <!-- Allıklar -->
      <ellipse cx="20" cy="32" rx="3" ry="1.8" fill="${c.blush}" opacity="0.6"/>
      <ellipse cx="36" cy="32" rx="3" ry="1.8" fill="${c.blush}" opacity="0.6"/>

      <!-- Gözler: Uyanık vs Uyuyan -->
      ${isAwake ? `
        <g class="pet-eyes-awake">
          <ellipse cx="23.5" cy="28" rx="3.3" ry="3.9" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="22.5" cy="26.9" r="1.3" fill="#ffffff"/>
          <circle cx="24.6" cy="29.3" r="0.6" fill="#ffffff"/>
          <ellipse cx="32.5" cy="28" rx="3.3" ry="3.9" fill="#1b120c" stroke="${o}" stroke-width="0.5"/>
          <circle cx="31.5" cy="26.9" r="1.3" fill="#ffffff"/>
          <circle cx="33.6" cy="29.3" r="0.6" fill="#ffffff"/>
        </g>
      ` : `
        <path d="M 21 28 Q 24.5 31 27.5 28" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M 29.5 28 Q 32.5 31 35.5 28" stroke="${o}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      `}

      ${isResearching ? `
        <g class="pet-glasses">
          <circle class="pet-glasses-frame" cx="23.5" cy="28" r="4.6"/>
          <circle class="pet-glasses-frame" cx="32.5" cy="28" r="4.6"/>
          <path class="pet-glasses-bridge" d="M 28.1 28 Q 28 27 27.9 28"/>
        </g>
      ` : ""}

      <!-- Sivri Siyah Burun & Siyah Çorap Patiler -->
      <polygon points="26.5,32 29.5,32 28,34" fill="#1b120c" stroke="${o}" stroke-width="0.8"/>
      <ellipse cx="22" cy="43.5" rx="5.5" ry="3.5" fill="${c.dark}" stroke="${o}" stroke-width="1.6"/>
      <ellipse cx="30" cy="43.5" rx="5.5" ry="3.5" fill="${c.dark}" stroke="${o}" stroke-width="1.6"/>
    </svg>
  `;
}

function renderCozyDecorations() {
  const hour = new Date().getHours();
  const isNight = hour >= 22 || hour < 6;
  const currentPetType = settings.petType || "cat";
  const petCfg = PET_CONFIG[currentPetType] || PET_CONFIG.cat;
  const colorId = settings.petColor || petCfg.defaultColor;
  const colorCfg = petCfg.colors.find((c) => c.id === colorId) || petCfg.colors[0];
  const awake = isPetAwake();
  const isResearching = state.phase === "researching";

  let petSvg = "";
  if (currentPetType === "dog") {
    petSvg = renderDogSvg(colorCfg, isNight, awake, isResearching);
  } else if (currentPetType === "rabbit") {
    petSvg = renderRabbitSvg(colorCfg, isNight, awake, isResearching);
  } else if (currentPetType === "fox") {
    petSvg = renderFoxSvg(colorCfg, isNight, awake, isResearching);
  } else {
    petSvg = renderCatSvg(colorCfg, isNight, awake, isResearching);
  }

  const emotes = awake ? (petCfg.awakeEmotes || ["✨", "💡", "🐾"]) : petCfg.idleEmotes;

  return `
    <div class="cozy-decorations" aria-hidden="true">
      <div class="cozy-item cozy-pet-box cozy-cat-box ${awake ? "is-awake" : ""}" id="cozyCatBtn" role="button" tabindex="0" title="${esc(petCfg.name)} — ${awake ? "canlı & uyanık dostun!" : "uyuyor, sevmek ve uyandırmak için tıkla! 🐾"}" aria-label="${esc(petCfg.name)}">
        <span class="pet-emote cat-emote" aria-hidden="true">
          <span class="z-1">${emotes[0]}</span>
          <span class="z-2">${emotes[1]}</span>
          <span class="z-3">${emotes[2]}</span>
        </span>
        ${petSvg}
      </div>
    </div>
  `;
}


function renderIdle() {
  const fullPool = currentTopicPool();
  const pool = availableTopicPool();
  const researched = getResearchedSet();
  const remainingCount = fullPool.filter((t) => !researched.has(`${t.tr}|${t.en}`)).length;
  const isAllCompleted = remainingCount === 0;
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];

  const wheelItems = generateWheelItems(pool);
  const items = wheelItems.map(
    (t) => `<li><b>${esc(t.tr)}</b><small>${esc(t.en)}</small></li>`
  ).join("");

  const initialOffset = getWheelInitialOffset(pool);
  const badgeText = isAllCompleted ? "Tümü Keşfedildi 🏆" : `${remainingCount} / ${fullPool.length} Kavram`;

  return `
    ${renderRecall()}
    <div class="catalog-wrapper">
      ${renderCategoryTabs()}
      <div style="position: relative;">
        ${renderCozyDecorations()}
        <section class="roulette-card">
          <div class="roulette-header">
            <div class="roulette-header-title">
              ${categoryIcon(cat)}
              <span>${cat.tr} Çekmecesi</span>
            </div>
          </div>

          <div class="wheel-viewport" id="wheelViewport" aria-hidden="true">
            <div class="wheel-fade top"></div>
            <ul class="wheel-track" id="wheelTrack" style="transform: translateY(-${initialOffset}px);">${items}</ul>
            <div class="wheel-fade bottom"></div>
            <div class="wheel-guide">
              <div class="wheel-guide-pointer left"></div>
              <div class="wheel-guide-pointer right"></div>
            </div>
          </div>

          <div class="roulette-footer">
            <button id="spinBtn" class="btn btn-primary" type="button" ${state.spinning ? "disabled" : ""}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>
              ${state.spinning ? "Kart Çekiliyor…" : "Sandıktan Çek"}
            </button>
          </div>
        </section>
      </div>
      ${renderDeskGreeting()}
    </div>
  `;
}

function callNumber(topic) {
  const category = activeCategory();
  const cat = CATEGORIES.find((c) => c.id === category);
  const prefix = category !== "general" && cat ? `${cat.tr} · ` : "";
  return `${prefix}Günün Fişi`;
}

function renderQuickTools(topic) {
  const googleQuery = encodeURIComponent(topic.tr + " nedir");
  return `
    <div class="quick-tools-row">
      <a href="https://www.google.com/search?q=${googleQuery}" target="_blank" rel="noopener noreferrer" class="quick-tool-btn" title="Google'da yeni sekmede araştır">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Google'da Ara</span>
      </a>
      <button type="button" id="copyTopicBtn" class="quick-tool-btn" title="Kavram adını panoya kopyala">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        <span>Kopyala</span>
      </button>
    </div>
  `;
}

function renderLanded() {
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];
  return `
    <div style="position: relative;">
      ${renderCozyDecorations()}
      <article class="concept-card">
        <div class="card-top-meta">
          <span class="card-callno">${callNumber(state.topic)}</span>
          <span class="card-cat-badge">
            ${categoryIcon(cat)}
            ${cat.tr}
          </span>
        </div>

        <h1 class="card-headline">${esc(state.topic.tr)}</h1>
        <p class="card-subtitle">${esc(state.topic.en)}</p>

        ${renderQuickTools(state.topic)}

        <div class="card-instruction">
          <p>
            <strong>${settings.researchMinutes} dakika</strong> boyunca bu kavramı araştırıp öğrenmek için süreyi başlatabilirsin.
          </p>
        </div>

        <div class="actions-row">
          <button id="startResearchBtn" class="btn btn-primary" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Araştırmaya Başla
          </button>
          <button id="cancelBtn" class="btn btn-secondary" type="button">Başka Kart Çek</button>
        </div>
      </article>
    </div>
  `;
}

function renderResearching() {
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];
  return `
    <div style="position: relative;">
      ${renderCozyDecorations()}
      <article class="concept-card">
        <div class="card-top-meta">
          <span class="card-callno">${callNumber(state.topic)}</span>
          <span class="card-cat-badge">
            ${categoryIcon(cat)}
            ${cat.tr}
          </span>
        </div>

        <h1 class="card-headline">${esc(state.topic.tr)}</h1>
        <p class="card-subtitle">${esc(state.topic.en)}</p>

        ${renderQuickTools(state.topic)}

        <div id="timerSection" class="timer-section">
          <div class="radial-timer-wrap">
            <svg class="radial-svg" viewBox="0 0 160 160">
              <circle class="radial-bg" cx="80" cy="80" r="70"></circle>
              <circle id="radialProgress" class="radial-progress" cx="80" cy="80" r="70"></circle>
            </svg>
            <div class="radial-timer-content">
              <span id="timerDigits" class="timer-digits">00:00</span>
              <span class="timer-label">${state.paused ? "Duraklatıldı" : "Odaklanma"}</span>
            </div>
          </div>
        </div>

        <div class="notes-container">
          <label class="notes-label" for="researchNotesInput">
            <span>Not Defteri</span>
          </label>
          <textarea id="researchNotesInput" class="notes-textarea" placeholder="Öğrendiğin ana fikirleri veya kendi cümlelerinle özetini buraya not al...">${esc(state.notes)}</textarea>
        </div>

        <div class="actions-row">
          <button id="pauseBtn" class="btn btn-secondary" type="button">
            ${state.paused
              ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="5 3 19 12 5 21 5 3"/></svg> Devam Et'
              : '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Duraklat'
            }
          </button>
          <button id="finishResearchBtn" class="btn btn-primary" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
            Tamamla ve Kaydet
          </button>
        </div>
      </article>
    </div>
  `;
}

function renderDone() {
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];
  return `
    <div style="position: relative;">
      ${renderCozyDecorations()}
      <article class="concept-card">
        <div class="card-top-meta">
          <span class="card-callno">${callNumber(state.topic)}</span>
          <span class="card-cat-badge">
            ${categoryIcon(cat)}
            ${cat.tr}
          </span>
        </div>

        <h1 class="card-headline">${esc(state.topic.tr)}</h1>
        <p class="card-subtitle">${esc(state.topic.en)}</p>

        <div class="completion-badge-wrap">
          <div class="stamp-badge">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            TAMAMLANDI
          </div>
        </div>

        ${state.notes ? `
          <div class="completion-notes-recap">
            <h4>Kaydedilen Not</h4>
            <p>${esc(state.notes)}</p>
          </div>
        ` : ""}

        <div class="actions-row">
          <button id="newRoundBtn" class="btn btn-primary" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>
            Yeni Kart Çek
          </button>
          <button id="viewInCatalogBtn" class="btn btn-secondary" type="button">Notlarımı Gör</button>
        </div>
      </article>
    </div>
  `;
}

function bindStageEvents() {
  const cozyCatBtn = document.querySelector("#cozyCatBtn");
  if (cozyCatBtn) {
    const handlePetClick = () => {
      sessionPetCount++;
      wakeUpPet(15000);

      const now = Date.now();
      rapidPetStreak = (now - lastCatPetTime < RAPID_PET_WINDOW_MS) ? rapidPetStreak + 1 : 1;
      lastCatPetTime = now;
      const isAnnoyed = rapidPetStreak >= RAPID_PET_ANNOY_THRESHOLD;

      sfx.playPetInteraction(isAnnoyed ? "annoyed" : "happy");

      const petType = settings.petType || "cat";
      const petCfg = PET_CONFIG[petType] || PET_CONFIG.cat;

      const emote = cozyCatBtn.querySelector(".pet-emote") || cozyCatBtn.querySelector(".cat-emote");
      if (emote) {
        emote.innerHTML = isAnnoyed ? `<span class="pet-heart cat-heart">${petCfg.annoyedEmote}</span>` : `<span class="pet-heart cat-heart">${petCfg.happyEmote}</span>`;
        setTimeout(() => {
          const currentAwake = isPetAwake();
          const currentEmotes = currentAwake ? (petCfg.awakeEmotes || ["✨", "💡", "🐾"]) : petCfg.idleEmotes;
          emote.innerHTML = `<span class="z-1">${currentEmotes[0]}</span><span class="z-2">${currentEmotes[1]}</span><span class="z-3">${currentEmotes[2]}</span>`;
        }, 2500);
      }
      cozyCatBtn.classList.add("is-purring");
      setTimeout(() => {
        cozyCatBtn.classList.remove("is-purring");
      }, 700);

      updateCozyPetDOM();

      if (isAnnoyed) {
        rapidPetStreak = 0; // tepkiden sonra sıfırla, spam'i önle
        showToast(petCfg.toastAnnoyed);
      } else if (sessionPetCount === 3) {
        showToast(petCfg.milestone3);
      } else if (sessionPetCount === 5) {
        showToast(petCfg.milestone5);
      } else {
        showToast(petCfg.toastMessages[Math.floor(Math.random() * petCfg.toastMessages.length)]);
      }
    };
    cozyCatBtn.addEventListener("click", handlePetClick);
    cozyCatBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handlePetClick();
      }
    });
  }

  const cozyCoffeeBtn = document.querySelector("#cozyCoffeeBtn");
  if (cozyCoffeeBtn) {
    const handleCoffeeSip = () => {
      sfx.playCoffee();
      const burst = cozyCoffeeBtn.querySelector(".coffee-steam-burst");
      if (burst) {
        burst.style.opacity = "1";
        burst.style.transform = "translateY(-14px) scale(1.3)";
        setTimeout(() => {
          burst.style.opacity = "0";
          burst.style.transform = "none";
        }, 800);
      }
      cozyCoffeeBtn.classList.add("is-sipping");
      setTimeout(() => cozyCoffeeBtn.classList.remove("is-sipping"), 600);
      const coffeeMsgs = [
        "☕ Sıcak bir yudum aldın... Zihninde yeni kıvılcımlar çaktı!",
        "☕ Mis gibi kahve kokusu... Odaklanma seviyesi +%100!",
        "☕ Şifa olsun! Masandaki kahveyle yeni bir kavrama dalmaya hazırsın."
      ];
      showToast(coffeeMsgs[Math.floor(Math.random() * coffeeMsgs.length)]);
    };
    cozyCoffeeBtn.addEventListener("click", handleCoffeeSip);
    cozyCoffeeBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCoffeeSip();
      }
    });
  }

  const nextQuoteBtn = document.querySelector("#nextQuoteBtn");
  if (nextQuoteBtn) {
    nextQuoteBtn.addEventListener("click", () => {
      sfx.playRustle();
      currentQuoteIndex = (currentQuoteIndex + 1) % CURIOSITY_QUOTES.length;
      const q = CURIOSITY_QUOTES[currentQuoteIndex];
      const card = document.querySelector("#quoteCard");
      const textEl = document.querySelector("#parchmentText");
      const authorEl = document.querySelector("#parchmentAuthor");
      if (card) {
        card.classList.add("is-flipping");
        setTimeout(() => {
          if (textEl) textEl.textContent = `“${q.text}”`;
          if (authorEl) authorEl.textContent = `— ${q.author}`;
          card.classList.remove("is-flipping");
        }, 220);
      }
    });
  }

  const spinBtn = document.querySelector("#spinBtn");
  if (spinBtn) spinBtn.addEventListener("click", spin);

  const categoryTabs = document.querySelector(".category-tabs");
  let hasDragged = false;
  if (categoryTabs) {
    // Fare tekerleğiyle yatay kaydırma
    categoryTabs.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        categoryTabs.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    // Fareyle tıklayıp sürükleyerek kaydırma (Desktop Drag-to-Scroll)
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    categoryTabs.addEventListener("mousedown", (e) => {
      isDown = true;
      hasDragged = false;
      startX = e.pageX - categoryTabs.offsetLeft;
      scrollStart = categoryTabs.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
      isDown = false;
    });

    categoryTabs.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const x = e.pageX - categoryTabs.offsetLeft;
      const walk = (x - startX) * 1.4;
      if (Math.abs(walk) > 5) {
        hasDragged = true;
      }
      categoryTabs.scrollLeft = scrollStart - walk;
    });
  }

  document.querySelectorAll(".cat-pill").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (hasDragged) {
        hasDragged = false;
        return;
      }
      if (state.spinning) return;
      sfx.playTick();
      settings.category = btn.dataset.category;
      saveSettings();
      render();
    });
  });

  const reviewAgainBtn = document.querySelector("#reviewAgainBtn");
  if (reviewAgainBtn) reviewAgainBtn.addEventListener("click", () => {
    settings.category = reviewAgainBtn.dataset.category || "general";
    saveSettings();
    state.topic = { tr: reviewAgainBtn.dataset.tr, en: reviewAgainBtn.dataset.en };
    state.phase = "landed";
    render();
  });

  const dismissReviewBtn = document.querySelector("#dismissReviewBtn");
  if (dismissReviewBtn) dismissReviewBtn.addEventListener("click", () => {
    dismissedReview = dismissReviewBtn.dataset.key;
    render();
  });

  const copyTopicBtn = document.querySelector("#copyTopicBtn");
  if (copyTopicBtn && state.topic) {
    copyTopicBtn.addEventListener("click", () => {
      copyToClipboard(`${state.topic.tr} (${state.topic.en})`);
    });
  }

  const startResearchBtn = document.querySelector("#startResearchBtn");
  if (startResearchBtn) startResearchBtn.addEventListener("click", startResearch);

  const cancelBtn = document.querySelector("#cancelBtn");
  if (cancelBtn) cancelBtn.addEventListener("click", resetToIdle);

  const pauseBtn = document.querySelector("#pauseBtn");
  if (pauseBtn) pauseBtn.addEventListener("click", () => {
    state.paused = !state.paused;
    const notesEl = document.querySelector("#researchNotesInput");
    if (notesEl) state.notes = notesEl.value;
    render();
  });

  const finishResearchBtn = document.querySelector("#finishResearchBtn");
  if (finishResearchBtn) finishResearchBtn.addEventListener("click", () => {
    sfx.playChime();
    triggerConfetti();
    completeResearch();
  });

  const newRoundBtn = document.querySelector("#newRoundBtn");
  if (newRoundBtn) newRoundBtn.addEventListener("click", resetToIdle);

  const viewInCatalogBtn = document.querySelector("#viewInCatalogBtn");
  if (viewInCatalogBtn) viewInCatalogBtn.addEventListener("click", () => {
    syncProfileUI();
    profileModal.classList.remove("is-hidden");
  });

  const researchNotesInput = document.querySelector("#researchNotesInput");
  if (researchNotesInput) {
    researchNotesInput.addEventListener("input", (e) => {
      state.notes = e.target.value;
      persistSession();
    });
  }
}

// ---------- Confetti Particle Burst ----------
function triggerConfetti() {
  // Canvas animasyonu CSS'in reduced-motion kuralına takılmaz, burada elle kontrol et.
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.querySelector("#confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#6366f1", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#a855f7"];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 50,
      r: Math.random() * 5 + 3,
      dx: (Math.random() - 0.5) * 14,
      dy: (Math.random() - 1.2) * 16,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.45; // gravity
      p.alpha -= p.decay;
      if (p.alpha > 0) {
        alive = true;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    if (alive) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// ---------- Settings Modal Events ----------
function syncPetSettingsUI() {
  const currentPet = settings.petType || "cat";
  const cfg = PET_CONFIG[currentPet] || PET_CONFIG.cat;
  const currentColor = settings.petColor || cfg.defaultColor;
  const currentBehavior = settings.petBehavior || "smart";

  document.querySelectorAll(".pet-type-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.pet === currentPet);
  });

  document.querySelectorAll(".pet-behavior-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.behavior === currentBehavior);
  });

  const colorGrid = document.querySelector("#petColorGrid");
  if (colorGrid) {
    colorGrid.innerHTML = cfg.colors.map((col) => `
      <button type="button" class="pet-color-btn ${col.id === currentColor ? "is-active" : ""}" data-color="${esc(col.id)}">
        <span class="pet-color-swatch" style="background: ${col.primary}; border-color: ${col.dark};"></span>
        <span>${esc(col.name)}</span>
      </button>
    `).join("");

    colorGrid.querySelectorAll(".pet-color-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const colorId = btn.dataset.color;
        settings.petColor = colorId;
        saveSettings();
        sfx.playTick();
        syncPetSettingsUI();
        updateCozyPetDOM();
        const found = cfg.colors.find((c) => c.id === colorId);
        showToast(`${cfg.icon} ${cfg.name}: ${found ? found.name : colorId} seçildi`);
      });
    });
  }
}

function syncSettingsUI() {
  researchRange.value = settings.researchMinutes;
  researchLabel.textContent = `${settings.researchMinutes} dk`;
  soundToggle.checked = settings.sound;
  if (soundVolumeRange) {
    const pct = Math.round((typeof settings.soundVolume === "number" ? settings.soundVolume : 0.7) * 100);
    soundVolumeRange.value = pct;
    if (soundVolumeLabel) soundVolumeLabel.textContent = `%${pct}`;
  }
  syncSoundIcons();
  syncAmbientButton();
  applyTheme(settings.theme);
  applyPalette(settings.palette);
  applyLampFocus(settings.lampFocus);
  syncPetSettingsUI();
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.remove("is-hidden");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add("is-hidden");
  const anyOpen = document.querySelectorAll(".modal-overlay:not(.is-hidden)").length > 0;
  if (!anyOpen) document.body.classList.remove("modal-open");
}

if (settingsBtn) {
  settingsBtn.addEventListener("click", () => {
    syncSettingsUI();
    openModal(settingsModal);
  });
}

function closeSettingsModal() {
  closeModal(settingsModal);
  render();
}

if (closeSettings) closeSettings.addEventListener("click", closeSettingsModal);
if (settingsModal) {
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) closeSettingsModal();
  });
}

if (researchRange) {
  researchRange.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10) || 15;
    settings.researchMinutes = val;
    if (researchLabel) researchLabel.textContent = `${val} dk`;
    saveSettings();
  });
}

if (soundToggle) {
  soundToggle.addEventListener("change", (e) => {
    settings.sound = e.target.checked;
    syncSoundIcons();
    if (!settings.sound) {
      sfx.stopAmbience();
    } else if (settings.ambience !== "none") {
      sfx.setAmbience(settings.ambience);
    }
    syncAmbientButton();
    saveSettings();
  });
}

if (soundVolumeRange) {
  soundVolumeRange.addEventListener("input", (e) => {
    const pct = parseInt(e.target.value, 10) || 0;
    if (soundVolumeLabel) soundVolumeLabel.textContent = `%${pct}`;
    sfx.setMasterVolume(pct / 100);
    saveSettings();
  });
  soundVolumeRange.addEventListener("change", () => {
    sfx.init();
    sfx.playTick();
  });
}

const themeQuickToggle = document.querySelector("#themeQuickToggle");
const themeBtnDark = document.querySelector("#themeBtnDark");
const themeBtnLight = document.querySelector("#themeBtnLight");

if (themeQuickToggle) {
  themeQuickToggle.addEventListener("click", () => {
    const nextTheme = settings.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    saveSettings();
  });
}

if (themeBtnDark) {
  themeBtnDark.addEventListener("click", () => {
    applyTheme("dark");
    saveSettings();
  });
}

if (themeBtnLight) {
  themeBtnLight.addEventListener("click", () => {
    applyTheme("light");
    saveSettings();
  });
}

document.querySelectorAll(".palette-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pal = btn.dataset.palette;
    sfx.playTick();
    applyPalette(pal);
    saveSettings();
    const names = {
      coffee: "☕ Sıcak Kahve paleti uygulandı",
      library: "🌲 Gece Kütüphanesi paleti uygulandı",
      matcha: "🍵 Matcha & Yulaf paleti uygulandı"
    };
    showToast(names[pal] || "Renk paleti güncellendi");
  });
});

document.querySelectorAll(".pet-type-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextPet = btn.dataset.pet;
    if (!PET_CONFIG[nextPet]) return;
    settings.petType = nextPet;
    settings.petColor = PET_CONFIG[nextPet].defaultColor;
    saveSettings();
    syncPetSettingsUI();
    updateCozyPetDOM();
    sfx.playPetInteraction("happy");
    const cfg = PET_CONFIG[nextPet];
    showToast(`${cfg.icon} Masa yoldaşın ${cfg.name} oldu!`);
  });
});

document.querySelectorAll(".pet-behavior-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextBehavior = btn.dataset.behavior;
    if (!["smart", "awake", "sleep"].includes(nextBehavior)) return;
    settings.petBehavior = nextBehavior;
    sfx.playTick();
    saveSettings();
    syncPetSettingsUI();
    updateCozyPetDOM();
    const behaviorNames = {
      smart: "🌟 Akıllı Uyanma modu seçildi (Tıklayınca & araştırmada uyanır)",
      awake: "👀 Hep Uyanık modu seçildi (Masa yoldaşın sürekli canlı!)",
      sleep: "💤 Huzurlu Uyku modu seçildi (Sakin sakin uyur)"
    };
    showToast(behaviorNames[nextBehavior]);
  });
});

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    if (state.phase === "idle") return;
    sfx.playRustle();
    resetToIdle();
  });
}

if (ambientSoundBtn) {
  ambientSoundBtn.addEventListener("click", () => {
    sfx.init();
    if (!settings.sound) {
      settings.sound = true;
      syncSoundIcons();
    }
    const sequence = ["none", "rain", "fire", "ocean"];
    const currentIdx = sequence.indexOf(settings.ambience);
    const nextAmbience = sequence[(currentIdx + 1) % sequence.length];
    settings.ambience = nextAmbience;
    sfx.setAmbience(nextAmbience);
    syncAmbientButton();
    saveSettings();
    const msgs = {
      none: "🔇 Ambiyans sesi kapatıldı",
      rain: "🌧️ Yağmur ambiyansı açıldı (Cama vuran damlalar)",
      fire: "🔥 Şömine çıtırtısı açıldı (Sıcacık çalışma ambiyansı)",
      ocean: "🌊 Deniz dalgaları açıldı (Sahil ambiyansı)"
    };
    showToast(msgs[nextAmbience]);
  });
}

function setupHangingLampChain() {
  const chainWrap = document.querySelector("#lampPullChain");
  const svg = document.querySelector("#chainPhysicsSvg");
  const touchArea = document.querySelector("#chainTouchArea");
  const cordPath = document.querySelector("#chainCordPath");
  const beadsGroup = document.querySelector("#chainBeadsGroup");
  const handleGroup = document.querySelector("#chainHandleGroup");
  if (!chainWrap || !svg || !cordPath || !beadsGroup || !handleGroup) return;

  // Geometry: SVG coordinates (viewBox 0 0 100 240)
  const ANCHOR_X = 64;
  const ANCHOR_Y = 0;
  const NUM_POINTS = 9;
  const SEGMENT_LEN = 16; // Rest length ~128px

  // Verlet Physics Nodes
  const nodes = [];
  for (let i = 0; i < NUM_POINTS; i++) {
    const y = ANCHOR_Y + i * SEGMENT_LEN;
    nodes.push({
      x: ANCHOR_X,
      y: y,
      oldX: ANCHOR_X + (i > 0 ? (Math.random() - 0.5) * 1.5 : 0),
      oldY: y,
      pinned: i === 0
    });
  }

  // Create SVG bead circles
  beadsGroup.innerHTML = "";
  const beadElements = [];
  for (let i = 1; i < NUM_POINTS - 1; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "2.8");
    circle.setAttribute("fill", "url(#brassBeadGrad)");
    circle.setAttribute("stroke", "#613b0a");
    circle.setAttribute("stroke-width", "0.6");
    beadsGroup.appendChild(circle);
    beadElements.push(circle);
  }

  let isDragging = false;
  let dragTargetX = ANCHOR_X;
  let dragTargetY = ANCHOR_Y + (NUM_POINTS - 1) * SEGMENT_LEN;
  let startPointerY = 0;
  let startPointerX = 0;
  let totalChainRestLen = (NUM_POINTS - 1) * SEGMENT_LEN; // 128px
  let maxAllowedLen = totalChainRestLen + 36; // 36px rahat çekiş mesafesi
  let lastMoveTime = 0;
  let lastMoveX = ANCHOR_X;
  let lastMoveY = ANCHOR_Y + totalChainRestLen;
  let releaseVx = 0;
  let releaseVy = 0;
  let animId = null;
  let isSimulating = false;

  function triggerThemeSwitch(isQuickTap = false) {
    const nextTheme = settings.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    saveSettings();
    sfx.playChainClick();
  }

  function getSvgPoint(e) {
    const rect = svg.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : ANCHOR_X);
    const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 130);
    const scaleX = 100 / rect.width;
    const scaleY = 240 / rect.height;
    return {
      x: Math.max(6, Math.min(94, (clientX - rect.left) * scaleX)),
      y: Math.max(4, Math.min(225, (clientY - rect.top) * scaleY))
    };
  }

  function onPointerDown(e) {
    e.stopPropagation();
    e.preventDefault();
    isDragging = true;
    const pt = getSvgPoint(e);
    startPointerX = pt.x;
    startPointerY = pt.y;
    lastMoveTime = performance.now();
    lastMoveX = pt.x;
    lastMoveY = pt.y;
    releaseVx = 0;
    releaseVy = 0;

    const dx = pt.x - ANCHOR_X;
    const dy = Math.max(0, pt.y - ANCHOR_Y);
    const dist = Math.hypot(dx, dy);
    if (dist > maxAllowedLen) {
      dragTargetX = ANCHOR_X + (dx / dist) * maxAllowedLen;
      dragTargetY = ANCHOR_Y + (dy / dist) * maxAllowedLen;
    } else {
      dragTargetX = pt.x;
      dragTargetY = pt.y;
    }

    nodes[NUM_POINTS - 1].x = dragTargetX;
    nodes[NUM_POINTS - 1].y = dragTargetY;
    nodes[NUM_POINTS - 1].oldX = dragTargetX;
    nodes[NUM_POINTS - 1].oldY = dragTargetY;

    startSimulation();
    try { handleGroup.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const pt = getSvgPoint(e);

    const dx = pt.x - ANCHOR_X;
    const dy = Math.max(0, pt.y - ANCHOR_Y);
    const dist = Math.hypot(dx, dy) || 1;
    if (dist > maxAllowedLen) {
      dragTargetX = ANCHOR_X + (dx / dist) * maxAllowedLen;
      dragTargetY = ANCHOR_Y + (dy / dist) * maxAllowedLen;
    } else {
      dragTargetX = pt.x;
      dragTargetY = pt.y;
    }

    // Kullanıcının anlık savurma hızını takip et
    const now = performance.now();
    const dt = Math.max(8, Math.min(80, now - lastMoveTime));
    const instVx = ((dragTargetX - lastMoveX) / dt) * 16.6;
    const instVy = ((dragTargetY - lastMoveY) / dt) * 16.6;
    releaseVx = releaseVx * 0.35 + instVx * 0.65;
    releaseVy = releaseVy * 0.35 + instVy * 0.65;
    lastMoveTime = now;
    lastMoveX = dragTargetX;
    lastMoveY = dragTargetY;
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    try { handleGroup.releasePointerCapture(e.pointerId); } catch { /* ignore */ }

    const endNode = nodes[NUM_POINTS - 1];
    const restY = ANCHOR_Y + totalChainRestLen;
    const dragDistanceY = endNode.y - restY;
    const totalMoveDist = Math.hypot(endNode.x - startPointerX, endNode.y - startPointerY);

    // Boğumların konumunu yumuşakça eşitle
    for (let i = 0; i < NUM_POINTS; i++) {
      nodes[i].oldX = nodes[i].x;
      nodes[i].oldY = nodes[i].y;
    }

    // Kullanıcının çekiş mesafesine ve savurma hızına tam orantılı momentum aktarımı
    const horizontalMomentum = Math.max(-16, Math.min(16, releaseVx * 0.9));
    const snapRecoilY = Math.min(7, Math.max(0, dragDistanceY * 0.18)); // Çekiş miktarıyla orantılı tok çıt sesi tepkisi
    const verticalMomentum = Math.max(-6, Math.min(6, releaseVy * 0.5)) - snapRecoilY;

    endNode.oldX = endNode.x - horizontalMomentum;
    endNode.oldY = endNode.y - verticalMomentum;

    // Tetikleme: Aşağı 10px çekildiyse veya hızlı dokunulduysa
    const isPulledEnough = dragDistanceY >= 10 || releaseVy > 4.5;
    const isQuickTap = totalMoveDist < 6;

    if (isPulledEnough || isQuickTap) {
      triggerThemeSwitch(isQuickTap);
    }
    startSimulation();
  }

  function updatePhysics() {
    const GRAVITY = 0.52;
    const DAMPING = 0.982; // Akıcı, doğal ve canlı sarkaç salınımı

    for (let i = 0; i < NUM_POINTS; i++) {
      const n = nodes[i];
      if (n.pinned) continue;

      if (isDragging && i === NUM_POINTS - 1) {
        n.oldX = n.x;
        n.oldY = n.y;
        n.x = dragTargetX;
        n.y = dragTargetY;
        continue;
      }

      const vx = (n.x - n.oldX) * DAMPING;
      const vy = (n.y - n.oldY) * DAMPING + GRAVITY;

      n.oldX = n.x;
      n.oldY = n.y;
      n.x += vx;
      n.y += vy;
    }

    const iterations = 6;
    for (let iter = 0; iter < iterations; iter++) {
      nodes[0].x = ANCHOR_X;
      nodes[0].y = ANCHOR_Y;

      for (let i = 0; i < NUM_POINTS - 1; i++) {
        const n1 = nodes[i];
        const n2 = nodes[i + 1];

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        const diff = (dist - SEGMENT_LEN) / dist;

        if (n1.pinned) {
          n2.x -= dx * diff;
          n2.y -= dy * diff;
        } else if (isDragging && i + 1 === NUM_POINTS - 1) {
          n1.x += dx * diff;
          n1.y += dy * diff;
        } else {
          n1.x += dx * 0.5 * diff;
          n1.y += dy * 0.5 * diff;
          n2.x -= dx * 0.5 * diff;
          n2.y -= dy * 0.5 * diff;
        }
      }
    }
  }

  function renderChain() {
    let pathD = `M ${nodes[0].x.toFixed(1)} ${nodes[0].y.toFixed(1)}`;
    for (let i = 1; i < NUM_POINTS; i++) {
      pathD += ` L ${nodes[i].x.toFixed(1)} ${nodes[i].y.toFixed(1)}`;
    }
    cordPath.setAttribute("d", pathD);
    if (touchArea) touchArea.setAttribute("d", pathD);

    for (let i = 1; i < NUM_POINTS - 1; i++) {
      const bead = beadElements[i - 1];
      if (bead) {
        bead.setAttribute("cx", nodes[i].x.toFixed(1));
        bead.setAttribute("cy", nodes[i].y.toFixed(1));
      }
    }

    const handleNode = nodes[NUM_POINTS - 1];
    const prevNode = nodes[NUM_POINTS - 2];
    const angle = Math.atan2(handleNode.x - prevNode.x, handleNode.y - prevNode.y) * (-180 / Math.PI);
    handleGroup.setAttribute("transform", `translate(${handleNode.x.toFixed(1)}, ${handleNode.y.toFixed(1)}) rotate(${(-angle).toFixed(1)})`);
  }

  function loop() {
    updatePhysics();
    renderChain();

    let totalVelocity = 0;
    for (let i = 1; i < NUM_POINTS; i++) {
      totalVelocity += Math.hypot(nodes[i].x - nodes[i].oldX, nodes[i].y - nodes[i].oldY);
    }

    if (isDragging || totalVelocity > 0.04) {
      animId = requestAnimationFrame(loop);
    } else {
      isSimulating = false;
      animId = null;
    }
  }

  function startSimulation() {
    if (!isSimulating) {
      isSimulating = true;
      animId = requestAnimationFrame(loop);
    }
  }

  if (touchArea) touchArea.addEventListener("pointerdown", onPointerDown);
  handleGroup.addEventListener("pointerdown", onPointerDown);
  cordPath.addEventListener("pointerdown", onPointerDown);
  beadsGroup.addEventListener("pointerdown", onPointerDown);

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);

  chainWrap.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerThemeSwitch();
    }
  });

  renderChain();
  startSimulation();
}

setupHangingLampChain();

if (soundQuickToggle) {
  soundQuickToggle.addEventListener("click", () => {
    settings.sound = !settings.sound;
    if (!settings.sound) {
      sfx.stopAmbience();
    } else if (settings.ambience !== "none") {
      sfx.setAmbience(settings.ambience);
    }
    saveSettings();
    showToast(settings.sound ? "Ses efektleri açıldı" : "Ses kapatıldı");
  });
}

// ---------- Profile & Catalog UI ----------
function getRankInfo(total) {
  if (total >= 20) return { title: "Bilge Kaşif 💎", desc: "20+ kavram sandığa eklendi!", icon: "💎" };
  if (total >= 10) return { title: "Kahve & Kitap Filozofu ☕", desc: "10+ kavram tamamlandı", icon: "☕" };
  if (total >= 5)  return { title: "Kavram Kaşifi ✨", desc: "5+ kavram sandıkta birikti", icon: "✨" };
  if (total >= 1)  return { title: "Meraklı Çırak 🌱", desc: "Harika bir alışkanlık başladı!", icon: "🌱" };
  return { title: "Yeni Kaşif 🧭", desc: "Sandığını doldurmaya hazır mısın?", icon: "🧭" };
}

function computeStats(list) {
  const byCategory = {};
  list.forEach((item) => {
    const key = item.category || "general";
    byCategory[key] = (byCategory[key] || 0) + 1;
  });

  const days = new Set(list.map((item) => new Date(item.finishedAt).toDateString()));
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (days.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return { total: list.length, byCategory, streak };
}

function renderStats(list) {
  const { total, byCategory, streak } = computeStats(list);
  const rank = getRankInfo(total);
  const topEntry = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0];
  const topCat = topEntry ? CATEGORIES.find((c) => c.id === topEntry[0]) : null;

  return `
    <div class="stats-panel">
      <div class="stat-rank-header">
        <span class="stat-rank-icon">${rank.icon}</span>
        <div class="stat-rank-info">
          <span class="stat-rank-title">${rank.title}</span>
          <span class="stat-rank-desc">${rank.desc}</span>
        </div>
      </div>
      <div class="stats-metrics-row">
        <div class="stat-metric-item">
          <span class="stat-metric-val">${total}</span>
          <span class="stat-metric-label">Öğrenilen Kavram</span>
        </div>
        <div class="stat-metric-divider"></div>
        <div class="stat-metric-item">
          <span class="stat-metric-val">${streak} Gün</span>
          <span class="stat-metric-label">Öğrenme Serisi 🔥</span>
        </div>
        <div class="stat-metric-divider"></div>
        <div class="stat-metric-item">
          <span class="stat-metric-val">${topCat ? esc(topCat.tr) : "—"}</span>
          <span class="stat-metric-label">En Sevilen Alan</span>
        </div>
      </div>
    </div>
  `;
}

function renderFilterChips(list) {
  const availableCats = new Set(list.map((item) => item.category || "general"));
  let html = `<button class="filter-chip${historyActiveCategory === "all" ? " is-active" : ""}" data-filter="all">Tümü (${list.length})</button>`;
  CATEGORIES.forEach((cat) => {
    if (availableCats.has(cat.id)) {
      const count = list.filter((i) => (i.category || "general") === cat.id).length;
      html += `<button class="filter-chip${historyActiveCategory === cat.id ? " is-active" : ""}" data-filter="${cat.id}">${cat.tr} (${count})</button>`;
    }
  });
  return html;
}

function renderHistoryList(list) {
  let filtered = list;
  if (historyActiveCategory !== "all") {
    filtered = filtered.filter((item) => (item.category || "general") === historyActiveCategory);
  }
  if (historySearchQuery) {
    const q = historySearchQuery.toLowerCase();
    filtered = filtered.filter((item) =>
      item.tr.toLowerCase().includes(q) ||
      item.en.toLowerCase().includes(q) ||
      (item.notes && item.notes.toLowerCase().includes(q))
    );
  }

  if (!filtered.length) {
    return `<p class="history-empty">${list.length === 0 ? "Kataloğun henüz boş. İlk kavramını çek ve keşfe başla!" : "Aramana uygun kavram bulunamadı."}</p>`;
  }

  return `
    <ul class="history-list">
      ${filtered.map((item) => {
        const cat = CATEGORIES.find((c) => c.id === item.category) || CATEGORIES[0];
        const dateStr = new Date(item.finishedAt).toLocaleDateString("tr-TR", { day: "2-digit", month: "short" });
        return `
          <li class="history-card">
            <div class="history-card-header">
              <div class="history-card-left">
                ${categoryIcon(cat)}
                <span class="history-cat-tag">${cat.tr}</span>
                <span class="history-card-title">${esc(item.tr)}</span>
              </div>
              <span class="history-card-date">${dateStr}</span>
            </div>
            <span class="history-card-en">${esc(item.en)}</span>
            ${item.notes ? `<div class="history-card-note">${esc(item.notes)}</div>` : ""}
          </li>
        `;
      }).join("")}
    </ul>
  `;
}

function syncProfileUI() {
  const list = loadHistory();
  if (statsContainer) statsContainer.innerHTML = renderStats(list);
  if (historyFilterRow) {
    historyFilterRow.innerHTML = renderFilterChips(list);
    historyFilterRow.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        historyActiveCategory = chip.dataset.filter;
        syncProfileUI();
      });
    });
  }
  if (historyListContainer) historyListContainer.innerHTML = renderHistoryList(list);
}

if (historySearchInput) {
  historySearchInput.addEventListener("input", (e) => {
    historySearchQuery = e.target.value.trim();
    syncProfileUI();
  });
}

if (profileBtn) {
  profileBtn.addEventListener("click", () => {
    historySearchQuery = "";
    if (historySearchInput) historySearchInput.value = "";
    historyActiveCategory = "all";
    syncProfileUI();
    openModal(profileModal);
  });
}

if (closeProfile && profileModal) {
  closeProfile.addEventListener("click", () => closeModal(profileModal));
}

if (profileModal) {
  profileModal.addEventListener("click", (e) => {
    if (e.target === profileModal) closeModal(profileModal);
  });
}

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    if (!confirm("Tüm araştırma geçmişini silmek istediğine emin misin?")) return;
    saveHistory([]);
    syncProfileUI();
    render();
    showToast("Katalog sıfırlandı");
  });
}

function historyToMarkdown(list) {
  if (!list.length) return "# Meraksandık — Araştırma Kataloğu\n\nHenüz araştırılan bir kavram yok.\n";
  const lines = ["# Meraksandık — Araştırma Kataloğu", ""];
  let lastDate = null;
  [...list].reverse().forEach((item) => {
    const dateKey = new Date(item.finishedAt).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
    if (dateKey !== lastDate) {
      lines.push(`## ${dateKey}`, "");
      lastDate = dateKey;
    }
    const cat = CATEGORIES.find((c) => c.id === item.category) || CATEGORIES[0];
    lines.push(`- **${item.tr}** (*${item.en}*) — \`${cat.tr}\``);
    if (item.notes) {
      lines.push(`  > ${item.notes}`);
    }
  });
  lines.push("");
  return lines.join("\n");
}

if (exportHistoryBtn) {
  exportHistoryBtn.addEventListener("click", () => {
    const md = historyToMarkdown(loadHistory());
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meraksandik-katalog.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Markdown dosyası indirildi");
  });
}

// ---------- Initialization ----------
applyTheme(settings.theme);
applyPalette(settings.palette);
applyLampFocus(settings.lampFocus);
syncSoundIcons();
syncAmbientButton();

const unlockAllAudio = () => {
  sfx.init();
  if (settings.sound && settings.ambience && settings.ambience !== "none" && !sfx.isAmbiencePlaying()) {
    sfx.setAmbience(settings.ambience);
  }
};
window.addEventListener("pointerdown", unlockAllAudio, { passive: true });
window.addEventListener("touchstart", unlockAllAudio, { passive: true });
window.addEventListener("click", unlockAllAudio, { passive: true });
window.addEventListener("keydown", unlockAllAudio, { passive: true });

let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (state.phase === "idle" && !state.spinning) {
      const track = document.querySelector("#wheelTrack");
      if (track) {
        const pool = availableTopicPool();
        const initialOffset = getWheelInitialOffset(pool);
        track.style.transform = `translateY(-${initialOffset}px)`;
      }
    }
  }, 100);
});

if (!restoreSession()) {
  render();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => { /* PWA desteği */ });
  });
}
