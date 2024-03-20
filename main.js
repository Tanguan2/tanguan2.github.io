const reading = [
    ["Designing Data-Intensive Applications", "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/"],
    ["Algorithmica - Algorithms for Modern Hardware", "https://en.algorithmica.org/hpc/"],
    ["Linux Programming Interface", "https://man7.org/tlpi/"],
    ["Operating Systems: Three Easy Pieces", "https://pages.cs.wisc.edu/~remzi/OSTEP/"],
]

const watching = [
    ["Performance Engineering of Software Systems", "https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/"],
    ["Programming Parallel Computers", "https://www.youtube.com/@JukkaSuomela/playlists"],
    ["Performance Ninja Class", "https://github.com/dendibakh/perf-ninja"],
]

const makeLink = (title, url) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = "_blank";
    link.innerText = title;
    return link;
};

const createList = (list) => {
    const ul = document.createElement('ul');
    list.forEach(([title, url]) => {
        const li = document.createElement('li');
        li.appendChild(makeLink(title, url));
        ul.appendChild(li);
    });
    return ul;
};

document.getElementById('reading').appendChild(createList(reading));
document.getElementById('watching').appendChild(createList(watching));