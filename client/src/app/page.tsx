import HeroBaner from './components/HeroBaner';
import Wrapper from './components/Wrapper';
import style from './styles/MainPage.module.css';

export default function Home() {
	return (
		<div className={style.page}>
			<Wrapper>
				<HeroBaner />
			</Wrapper>
		</div>
	);
}
