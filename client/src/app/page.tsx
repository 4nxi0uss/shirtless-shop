import HeroBaner from '@/app/components/HeroBaner';
import Wrapper from '@/app/components/Wrapper';
import style from '@/app/styles/MainPage.module.css';

export default function Home() {
	return (
		<div className={style.page}>
			<Wrapper>
				<HeroBaner />
			</Wrapper>
		</div>
	);
}
