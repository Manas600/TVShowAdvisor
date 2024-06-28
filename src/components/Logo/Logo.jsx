import s from "./style.module.css";

export function Logo({ img, title, subtitle }) {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <div className={s.root} onClick={handleLogoClick}>
      <div className={s.container}>
        <img className={s.img} src={img} alt="Logo" />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </div>
  );
}
