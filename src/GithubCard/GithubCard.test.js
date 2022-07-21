import GithubCard from './GithubCard'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
    const tree = renderer.create(<GithubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})