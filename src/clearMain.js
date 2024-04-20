function clearMain(mainCont) {
    while (mainCont.firstChild) {
        mainCont.removeChild(mainCont.firstChild);
    }
}

export default clearMain