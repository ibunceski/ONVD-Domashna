const lr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1500,
    reset: true
})
// const rr = ScrollReveal({
//     origin: 'right',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })
// const tr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })
// // const dr = ScrollReveal({
// //     origin: 'bottom',
// //     distance: '80px',
// //     duration: 2000,
// //     reset: true
// // })
lr.reveal('.aboutLogo', {})
lr.reveal('.aboutH1',{delay: 150})
lr.reveal('.skillsLogo', {})
lr.reveal('.data', {delay:200, interval: 100})
lr.reveal('.telephone', {})
lr.reveal('.contactText', {})
lr.reveal('.contactRight', {interval:200})
lr.reveal('.contactArea', {interval:400})


const rr = ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: 1000,
    reset: true
})
rr.reveal('.aboutH3',{delay:1000})
rr.reveal('.educationLogo',{})
rr.reveal('.box',{delay:100,interval:50})
rr.reveal('.mail', {})
rr.reveal('.submit', {})

const tr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
})
tr.reveal('.aboutP', {delay:500})
tr.reveal('.contactLogo', {})

const br = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})

br.reveal('.aboutButton', {delay:300})
br.reveal('.social-icons', {})