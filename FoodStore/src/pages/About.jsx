function About() {
    return (
        <>
            <div className="container content">
                <header style={{ color: '#333', textAlign: 'center' }}>
                    <h3>Міністерство освіти і науки України</h3>
                    <h4>
                        Донецький національний університет імені Василя Стуса
                    </h4>
                    <h5>Факультет інформаційних і прикладних технологій</h5>
                    <h6>Катедра комп’ютерних наук</h6>
                </header>
                <main
                    style={{
                        margin: '1rem -20rem',
                        textAlign: 'right',
                        fontSize: '1.2rem',
                    }}
                >
                    <h1 style={{ fontSize: '1.5rem' }}>
                        Виконав студент гр. КН-21-Б{' '}
                        <span style={{ color: 'blue' }}>Гуменчук П.С.</span>
                    </h1>
                </main>
            </div>
        </>
    );
}

export { About };
