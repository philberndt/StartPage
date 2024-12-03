
const SearchBox = () => {
  const [selectedEngine, setSelectedEngine] = React.useState('google');
  
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      let url = '';
      if (selectedEngine === 'google') {
        url = `https://google.no/search?q=${encodeURIComponent(query)}`;
      } else if (selectedEngine === 'alternativeto') {
        url = `https://alternativeto.net/browse/search/?q=${encodeURIComponent(query)}`;
      } else if (selectedEngine === 'chatgpt') {
        url = `https://chatgpt.com/search?q=${encodeURIComponent(query)}`;
      }
      window.open(url, '_blank');
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        id="searchInput"
        placeholder="Search..."
        onKeyPress={handleSearch}
        autoComplete="off"
      />
      <div className="search-icons">
        {['search', 'apps', 'chat'].map((icon, index) => (
          <span
            key={icon}
            className={`search-icon ${selectedEngine === ['google', 'alternativeto', 'chatgpt'][index] ? 'active' : ''}`}
            onClick={() => setSelectedEngine(['google', 'alternativeto', 'chatgpt'][index])}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container welcome">
      <h1 className="display-4">Welcome to Your Start Page</h1>
      <p className="lead">Customize this page to get started 🚀</p>
      <p className="emoji-test">
        Let's search something! 🔍 Try different engines: Google 🌐,
        AlternativeTo 🔄, or ChatGPT 🤖
      </p>
      <div className="search-box">
        <SearchBox />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));