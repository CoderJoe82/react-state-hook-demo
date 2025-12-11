interface MenuItem {
    label: string;
    href: string;
}
/*
Here, much like in button display, we're just making an object telling what types of items are in MenuItem.
*/

interface MenuBarProps {
    items: MenuItem[];
}
/*
And here, we're making a new props object. And by saying MenuItem[], we're saying that items holds a list of all the strings inside
of MenuItem.
*/

function MenuBar({ items }: MenuBarProps) {
    /*
    In here, we're passing the props to this component from items, which is, as you can see, the general label and href. These are
    reusable props that we stored in items, which would look like this. [label, href], except they're both objects, not just strings behind
    the scenes. The end point is it allows you to pass strings, like we do when we call them in app.tsx
    */
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
