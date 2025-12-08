interface MenuItem {
    label: string;
    href: string;
}

interface MenuBarProps {
    items: MenuItem[];
}

function MenuBar({ items }: MenuBarProps) {
    return (
        <nav>
            <ul>
                {items.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MenuBar