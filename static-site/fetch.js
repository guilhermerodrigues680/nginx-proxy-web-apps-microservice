async function main() {    
    try {
        const url = "http://localhost:8087/nodejs/hello";
        const res = await fetch(url);
        const txt = await res.text();

        const p = document.createElement('p');
        p.innerText = url + ' : ' + txt;

        document.body.appendChild(p);
    } catch (err) {
        console.error(err);
    }
    
    try {
        const url = "http://localhost:8087/spring/hello";
        const res = await fetch(url);
        const txt = await res.text();

        const p = document.createElement('p');
        p.innerText = url + ' : ' + txt;

        document.body.appendChild(p);
    } catch (err) {
        console.error(err);
    }

}

main();