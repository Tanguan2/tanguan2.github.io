const reading = [
    ["Designing Data-Intensive Applications", "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/"],
    ["Algorithmica - Algorithms for Modern Hardware", "https://en.algorithmica.org/hpc/"],
    ["Linux Programming Interface", "https://man7.org/tlpi/"],
    ["Operating Systems: Three Easy Pieces", "https://pages.cs.wisc.edu/~remzi/OSTEP/"],
    ["Build Your Own Redis with C/C++", "https://build-your-own.org/redis/"],
    ["Microprocessor Architecture: From Simple Pipelines to Chip Multiprocessors", "https://www.amazon.ca/Microprocessor-Architecture-Simple-Pipelines-Multiprocessors/dp/0521769922"],
    ["Chrys Woods: Parallel Programming with C++", "https://chryswoods.com/parallel_c++/README.html"],
    ["What Every Programmer Should Know About Memory", "https://www.akkadia.org/drepper/cpumemory.pdf"],
    ["MapReduce: Simplified Data Processing on Large Clusters", "https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf"],
    ["The Pragmatic Programmer", "https://www.amazon.ca/Pragmatic-Programmer-Journeyman-Master/dp/020161622X"],
    ["Computer Architecture, A Quantitative Approach", "https://www.amazon.ca/Computer-Architecture-Quantitative-John-Hennessy/dp/012383872X"],
    ["My First Language Frontend with LLVM", "https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html"],
    ["Optimizing Software in C++", "https://www.agner.org/optimize/optimizing_cpp.pdf"],
]

const watching = [
    ["Performance Engineering of Software Systems", "https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/"],
    ["Programming Parallel Computers", "https://www.youtube.com/@JukkaSuomela/playlists"],
    ["Performance Ninja Class", "https://github.com/dendibakh/perf-ninja"],
    ["CMU Advanced Database Systems", "https://www.youtube.com/@CMUDatabaseGroup/playlists"],
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