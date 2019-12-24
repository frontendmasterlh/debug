function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(undefined, arguments), ms)
            // return 'hello'
    }
}


let helloDefered = defer




var helloDefered = defer(hello, 2000)
helloDefered('hogh')

function hello(who) {
    console.log('hello ' + who);
}