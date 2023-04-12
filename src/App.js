import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AboutStudent  = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3, slidesToScroll: 3,
                infinite: true, dots: false
            }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, slidesToScroll: 2,
                    infinite: true, dots: false
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    const block = [{
        image: "https://st25.styapokupayu.ru/images/blog_posts/covers/000/300/022_large.png?1658306515",
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "03.02.2023 г"
    }, {
        image: "https://bipbap.ru/wp-content/uploads/2018/06/nice_girls_27.jpg",
        name: "Виктория Семенова",
        desc: "Проходила курс Microsoft Excel: Продвинутый уровень. У меня был замечательный преподаватель и наставник Алиса Пушина. Подача материала просто супер, без воды, очень грамотно и понятно все объясняли. После каждого модуля были практические задания для закрепления материала и очень большие и интересные домашние задания , также был очень подробный разбор домашнего задания. Всегда своевременно отвечали на мои вопросы и быстро проверяли мои домашние задания. Рекомендую!",
        date: "12.04.2022 г"
    }, {
        image: "https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg",
        name: "Анатолий Борисович",
        desc: "Очень доволен прохождением данного курса. Понравились объяснения преподавателя - Дмитрия Сафонова: информация подавалась простым и понятным языком, с демонстрацией всей работы и долей юмора. Данный курс могу с лёгкостью посоветовать всем, кто хочет заниматься Python-разработкой.",
        date: "22.01.2023 г"
    }, {
        image: "https://bipbap.ru/wp-content/uploads/2021/07/1-44.jpg",
        name: "Алина Кириллова",
        desc: "Проходила углубленный курс Эксель оффлайн в этой школе. Страх этой программы прошел. Я знаю Эксель, но были некоторые прорехи. Спасибо преподавателю Евгении, что помогла из убрать.Были практические задания, также, домашние задания. На вопросы отвечали быстро.Очень хороший плюс, что если хочешь пройти курс еще раз, это можно сделать несколько раз( при наличии свободных мест).",
        date: "11.06.2022 г"
    }, {
        image: "https://avatars.mds.yandex.net/i?id=1fb376530f2bd5c440c5d152d8f7e64a0b7caf53-8287477-images-thumbs&n=13",
        name: "Олег Вадимович",
        desc: "Проходил курс по JS и пришло осознание что это моё! Это так интересно, я офигел просто! Спасибо большое преподователю, за понятную подачу информации, видно что человек в этом специалист и таким людям можно и даже нужно платить! Советую всем Бруноям, кто заинтересован в подобных направлениях ну или у кого проблемы с мотивацией",
        date: "06.09.2022 г"
    }, {
        image: "https://st.depositphotos.com/1000686/3738/i/450/depositphotos_37383675-stock-photo-portrait-of-a-young-beautiful.jpg",
        name: "Милана Брежнева",
        desc: "Всем привет! хочу выразить благодарность школе прошла у них курс Веб-разработчик с нуля очень понравилась подача материала (преподаватель Кирилл Демидов) каждое занятие - это сплошная практика, что очень помогает быстрее усвоить материал. Думаю, что чуть позже еще поучусь у них чему-нибудь одним словом, рекомендую))",
        date: "18.12.2022 г"
    }, {
        image: "https://rusadmin.biz/files/2020/09/PhotoMuzhchin45LetDljaAvatar_MAMBA.jpg",
        name: "Радим Степанович",
        desc: "Очень понравился курс по SMM и особенно хочется отметить терпение и лояльность нашего преподавателя. У меня человека далекого от соц.сетей теперь есть четкое представление развития моего бизнеса, очень хорошо все уложилось в голове, я даже не ожидала за такой срок получить столько информации. Ну да придется немного поработать головой и руками в соц.сетях…а никто и не обещал,что сделает это за нас.",
        date: "05.02.2023 г"
}
]
return (<>
    <section id="slider">
        <div className="container">
            <div className="slider--general">
                <h3>Отзывы выпускников</h3>
                <Slider {...setting}>
                    {block.map((el, idx) => (
                        <div  className='slider--general__block' key={idx}>
                            <img className='slider--general__block--phone' src={el.image} alt=""/>
                            <h1>{el.name}</h1>
                            <p>
                                {el.desc}
                            </p>
                            <h2>{el.date}</h2>
                        </div>))}
                </Slider>
            </div>
        </div>
    </section>
</>);
};

export default AboutStudent