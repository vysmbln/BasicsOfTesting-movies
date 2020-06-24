it('Shows an autocomplete', () => {
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                {Title: 'Avengers' },
                {Title: 'Parasite' },
                {Title: 'Rush Hour' }
            ];
        },
        renderOption(movie) {
            return movie.Title;
        }
    });
    const dropdown = document.querySelector('.dropdown');

   

});