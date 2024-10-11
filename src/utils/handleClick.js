
const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 30;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

export { handleClick };