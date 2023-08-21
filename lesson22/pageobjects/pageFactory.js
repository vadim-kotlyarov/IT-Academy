const Header = require('./components/header');
const LeftMenu = require('./components/leftMenu');
const RightContentsMenu = require('./components/rightContentsMenu');
const SearchModal = require('./components/searchModal');
const ApiPage = require('./apiPage');
const CommunityPage = require('./communityPage');
const ContributePage = require('./contributePage');
const DocsPage = require('./docsPage');
const GitHubPage = require('./gitHubPage');
const MainPage = require('./mainPage');
const SponsorPage = require('./sponsorPage');
const BlogPage = require('./blogPage');

class PageFactory {
    static 'Header' = new Header();
    static 'LeftMenu' = new LeftMenu();
    static 'RightContentsMenu' = new RightContentsMenu();
    static 'SearchModal' = new SearchModal();
    static 'ApiPage' = new ApiPage();
    static 'CommunityPage' = new CommunityPage();
    static 'ContributePage' = new ContributePage();
    static 'DocsPage' = new DocsPage();
    static 'GitHubPage' = new GitHubPage();
    static 'MainPage' = new MainPage();
    static 'SponsorPage' = new SponsorPage();
    static 'BlogPage' = new BlogPage();
}

module.exports = PageFactory;