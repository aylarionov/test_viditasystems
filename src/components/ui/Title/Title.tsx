import cls from './Title.module.css';

interface TitleProps {
    title: string;
}

export const Title = ({title}: TitleProps) => (
    <span className={cls.title}>
        {title}
    </span>
)
