new Vue({
    el: '#app',

    data: {

        header: {
            contents: [{
                title: 'VOICI UNE WEB APP',
                paragraph: "Nous nous servirons de ce template en guise d'exercice pour implémenter et utiliser Vue.js. Le ZIP de ce template (avec et sans JS) est disponible dans la première section \"Projet\" de la formation."
            }]
        },

        inPageProduct: false,
        products: {
            currendIndex: 0,
            data: [{
                    name: 'produit 1',
                    img: 'img/portfolio1.jpg',
                    client: 'Envato 1',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018',
                    description: 'descriptions',
                    paragraph: 'To shewing another demands to. Marianne property cheerful informed at striking at. ',
                    paragraph2: 'Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar.'
                },
                {
                    name: 'produit 2',
                    img: 'img/portfolio2.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018',
                    description: 'descriptions1',
                    paragraph: 'To shewing another demands to. Marianne property cheerful informed at striking at. ',
                    paragraph2: 'Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar.'
                },
                {
                    name: 'Chaussure bleue',
                    img: 'img/portfolio3.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018',
                    description: 'description2',
                    paragraph: 'To shewing another demands to. Marianne property cheerful informed at striking at. ',
                    paragraph2: 'Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar.'
                },
                {
                    name: 'Titre du produit 4',
                    img: 'img/portfolio4.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018',
                    description: 'descriptions3',
                    paragraph: 'To shewing another demands to. Marianne property cheerful informed at striking at. ',
                    paragraph2: 'Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar.'
                },
                {
                    name: 'Titre du produit 5',
                    img: 'img/portfolio5.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018',
                    description: 'descriptions4',
                    paragraph: 'To shewing another demands to. Marianne property cheerful informed at striking at. ',
                    paragraph2: 'Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar.'
                }
            ]
        },

        faqParagraphs: {
            faqdesc: [{
                paragraph1: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorperi.',
                paragraph2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptatibus, tempora odio dicta molestiae recusandae delectus perferendis eveniet aspernatur voluptatum earum dolore necessitatibus odit perspiciatis eos, quidem soluta autem esse.'
            }]
        },

        faq: {
            currentQuestion: 0,
            questions: [{
                    sentence: 'Started several mistake joy say painful removed reached end',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'Although moreover mistaken kindness me feelings do be marianne?',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'By in no ecstatic wondered disposal my speaking?',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                }
            ]
        },

        opinions: {
            clientOpinions: [{
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                name: 'Amber Mcdonald',
                job: 'Web Developper'
            }, {
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                name: 'Alice Johnson',
                job: 'Business Development'
            }, {
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                name: 'Rhonda Barnes',
                job: 'UI/UX Designer'
            }]
        }


    },

    computed: {
        currentProduct: function () {
            return this.products.data[this.products.currendIndex]
        }
    },

    methods: {
        showProduct: function (i) {
            this.products.currendIndex = i
            this.inPageProduct = true
            window.scrollTo(0, 0)
        },

        homeLink: function () {
            this.inPageProduct = false
            window.scrollTo(0, 0)
        }
    },



})