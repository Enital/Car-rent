import Description from 'components/Description/Description';
import css from './mainPage.module.css';
export default function MainPage() {
  return (
    <div className={css.container}>
      <h1>Main page</h1>
      <Description />
    </div>
  );
}
