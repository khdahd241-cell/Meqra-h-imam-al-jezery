const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const courses = [
  {
    title: "تصحيح تلاوة القرآن الكريم",
    description: "برنامج لتصحيح القراءة وضبط مخارج الحروف والأداء القرآني."
  },
  {
    title: "علم التجويد",
    description: "دراسة أحكام التجويد بطريقة منظمة وميسرة."
  },
  {
    title: "الإقراء والإجازة بالسند",
    description: "برنامج متقدم للإقراء والتأهيل للحصول على الإجازة القرآنية بالسند."
  }
];

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>مقرأة الإمام الجزري | للإقراء والإجازة بالسند</title>

  <meta name="description"
    content="مقرأة الإمام الجزري للإقراء والإجازة بالسند وتعليم القرآن الكريم والتجويد وتصحيح التلاوة.">

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, Tahoma, sans-serif;
      background: #f7f8f5;
      color: #17231d;
      line-height: 1.8;
    }

    header {
      background: #0c3b2e;
      color: white;
      padding: 18px 6%;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 3px 15px rgba(0,0,0,.15);
    }

    nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .logo {
      font-size: 21px;
      font-weight: bold;
    }

    .logo span {
      display: block;
      font-size: 12px;
      opacity: .8;
      font-weight: normal;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin-right: 18px;
      font-size: 14px;
    }

    .hero {
      min-height: 650px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 70px 20px;
      background:
        linear-gradient(rgba(6,48,37,.88), rgba(6,48,37,.94)),
        radial-gradient(circle at top, #387d64, #06291f);
      color: white;
    }

    .hero-content {
      max-width: 900px;
    }

    .badge {
      display: inline-block;
      padding: 7px 18px;
      border: 1px solid rgba(255,255,255,.3);
      border-radius: 30px;
      margin-bottom: 25px;
      font-size: 14px;
    }

    h1 {
      font-size: clamp(35px, 7vw, 70px);
      line-height: 1.25;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 18px;
      max-width: 700px;
      margin: auto;
      opacity: .92;
    }

    .buttons {
      margin-top: 35px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .btn {
      display: inline-block;
      padding: 13px 27px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: bold;
      transition: .2s;
    }

    .btn-primary {
      background: #d8b45a;
      color: #17231d;
    }

    .btn-secondary {
      border: 1px solid rgba(255,255,255,.5);
      color: white;
    }

    .section {
      max-width: 1200px;
      margin: auto;
      padding: 80px 20px;
    }

    .section-title {
      text-align: center;
      margin-bottom: 45px;
    }

    .section-title h2 {
      font-size: 34px;
      color: #0c3b2e;
      margin-bottom: 10px;
    }

    .section-title p {
      color: #68736e;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 22px;
    }

    .card {
      background: white;
      padding: 30px;
      border-radius: 18px;
      box-shadow: 0 8px 30px rgba(0,0,0,.07);
      border: 1px solid #edf0ed;
      transition: transform .2s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .icon {
      width: 55px;
      height: 55px;
      border-radius: 14px;
      background: #e8f1ed;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      margin-bottom: 18px;
    }

    .card h3 {
      color: #0c3b2e;
      margin-bottom: 10px;
      font-size: 20px;
    }

    .card p {
      color: #66706c;
      font-size: 14px;
    }

    .about {
      background: #0c3b2e;
      color: white;
    }

    .about-inner {
      max-width: 1000px;
      margin: auto;
      text-align: center;
      padding: 80px 20px;
    }

    .about h2 {
      font-size: 35px;
      margin-bottom: 20px;
    }

    .about p {
      opacity: .9;
      font-size: 17px;
    }

    .cta {
      text-align: center;
      background: #f0eadb;
      padding: 70px 20px;
    }

    footer {
      background: #071f18;
      color: white;
      text-align: center;
      padding: 35px 20px;
    }

    footer p {
      opacity: .75;
      font-size: 14px;
      margin: 5px;
    }

    @media (max-width: 700px) {
      nav {
        flex-direction: column;
      }

      nav a {
        margin: 0 5px;
        font-size: 12px;
      }

      .hero {
        min-height: 570px;
      }

      .section {
        padding: 60px 18px;
      }
    }
  </style>
</head>

<body>

<header>
  <nav>
    <div class="logo">
      مقرأة الإمام الجزري
      <span>للإقراء والإجازة بالسند</span>
    </div>

    <div>
      <a href="#home">الرئيسية</a>
      <a href="#courses">الدورات</a>
      <a href="#about">عن المقرأة</a>
      <a href="#contact">التواصل</a>
    </div>
  </nav>
</header>

<section class="hero" id="home">
  <div class="hero-content">

    <div class="badge">
      بسم الله الرحمن الرحيم
    </div>

    <h1>
      مقرأة الإمام الجزري
    </h1>

    <p>
      للإقراء والإجازة بالسند
      <br>
      تعليم القرآن الكريم، وتصحيح التلاوة، والتجويد
      في بيئة تعليمية تجمع بين أصالة الإقراء والتقنيات الحديثة.
    </p>

    <div class="buttons">
      <a class="btn btn-primary" href="#courses">
        اكتشف برامجنا
      </a>

      <a class="btn btn-secondary" href="#contact">
        التسجيل في المقرأة
      </a>
    </div>

  </div>
</section>

<section class="section" id="courses">

  <div class="section-title">
    <h2>برامج المقرأة</h2>
    <p>مسارات تعليمية منظمة تناسب مختلف مستويات الطلاب</p>
  </div>

  <div class="cards">

    ${courses.map((course, index) => `
      <div class="card">

        <div class="icon">
          ${["📖", "✦", "🏆"][index]}
        </div>

        <h3>${course.title}</h3>

        <p>
          ${course.description}
        </p>

      </div>
    `).join("")}

  </div>

</section>

<section class="about" id="about">

  <div class="about-inner">

    <h2>عن مقرأة الإمام الجزري</h2>

    <p>
      مقرأة تعليمية تهدف إلى خدمة كتاب الله تعالى،
      ونشر القراءة الصحيحة، وتعليم التجويد والإقراء،
      وتأهيل الطلاب للارتقاء في رحلتهم القرآنية
      وصولًا إلى الإتقان والإجازة بالسند وفق منهج علمي منظم.
    </p>

  </div>

</section>

<section class="section">

  <div class="section-title">
    <h2>لماذا المقرأة؟</h2>
    <p>تجربة تعليمية مصممة لخدمة الطالب</p>
  </div>

  <div class="cards">

    <div class="card">
      <div class="icon">🎓</div>
      <h3>تعليم متخصص</h3>
      <p>
        برامج تعليمية منظمة في القرآن الكريم والتجويد والإقراء.
      </p>
    </div>

    <div class="card">
      <div class="icon">📚</div>
      <h3>منهج متدرج</h3>
      <p>
        الانتقال بالطالب من الأساسيات إلى المراحل المتقدمة بصورة واضحة.
      </p>
    </div>

    <div class="card">
      <div class="icon">🌍</div>
      <h3>تعلم من أي مكان</h3>
      <p>
        منصة رقمية تساعد الطلاب على متابعة رحلتهم القرآنية عن بُعد.
      </p>
    </div>

  </div>

</section>

<section class="cta" id="contact">

  <h2>ابدأ رحلتك مع القرآن</h2>

  <p>
    نسعد بانضمامك إلى مقرأة الإمام الجزري
    للإقراء والإجازة بالسند.
  </p>

  <div class="buttons">

    <a
      class="btn btn-primary"
      href="https://t.me/aljezer_241"
      target="_blank">
      التواصل عبر Telegram
    </a>

    <a
      class="btn btn-primary"
      href="mailto:khdahd241@gmail.com">
      التواصل عبر البريد
    </a>

  </div>

</section>

<footer>

  <p>
    © 2026 مقرأة الإمام الجزري للإقراء والإجازة بالسند
  </p>

  <p>
    جميع الحقوق محفوظة
  </p>

</footer>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Meqraa website running on port ${PORT}`);
});
