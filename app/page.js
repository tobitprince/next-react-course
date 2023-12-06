function Header({children}){
    return ( 
        <header>
            {children}
        </header>
    );
}

export default function Page() {
    return (
        <section>
            <Header>
                <h1>My page</h1>
            </Header>
            <p>My page</p>
        </section>
    );
}