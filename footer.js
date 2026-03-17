(function () {
    var style = document.createElement('style');
    style.textContent = [
        'footer {',
        '    background: var(--ocean-deep);',
        '    color: var(--ocean-muted);',
        '    padding: 4.5rem 1.5rem 3rem;',
        '    text-align: center;',
        '    position: relative;',
        '}',
        '.footer-inner {',
        '    position: relative;',
        '    max-width: 800px;',
        '    margin: 0 auto;',
        '}',
        '.footer-made {',
        '    font-family: \'Fraunces\', serif;',
        '    font-size: 1.15rem;',
        '    font-weight: 700;',
        '    color: var(--sand);',
        '    margin-bottom: 1.2rem;',
        '}',
        '.footer-nav {',
        '    display: flex;',
        '    justify-content: center;',
        '    align-items: center;',
        '    flex-wrap: wrap;',
        '    margin-bottom: 1.5rem;',
        '}',
        '.footer-nav a {',
        '    color: var(--sand-dark);',
        '    text-decoration: none;',
        '    font-size: 0.9rem;',
        '    padding: 0 0.8rem;',
        '    border-right: 1px solid var(--ocean-muted);',
        '    line-height: 1;',
        '    transition: color 0.2s ease;',
        '}',
        '.footer-nav a:last-child { border-right: none; }',
        '.footer-nav a:hover { color: var(--warm-white); }',
        '.footer-nav a[aria-current="page"] {',
        '    color: var(--warm-white);',
        '    font-weight: 600;',
        '    pointer-events: none;',
        '}',
        '.footer-copy { font-size: 0.8rem; color: var(--ocean-muted); }',
        'footer a:focus-visible {',
        '    outline: 2px solid var(--sand);',
        '    outline-offset: 3px;',
        '    border-radius: 2px;',
        '}'
    ].join('\n');
    document.head.appendChild(style);

    var pages = [
        { href: 'index.html', label: 'Portier' },
        { href: 'privacy.html', label: 'Privacybeleid' },
        { href: 'gebruiksvoorwaarden.html', label: 'Gebruiksvoorwaarden' }
    ];

    var current = window.location.pathname.split('/').pop() || 'index.html';

    var navLinks = pages.map(function (page) {
        var active = page.href === current || (current === '' && page.href === 'index.html');
        return '<a href="' + page.href + '"' + (active ? ' aria-current="page"' : '') + '>' + page.label + '</a>';
    }).join('');

    var footer = document.createElement('footer');
    footer.innerHTML =
        '<div class="footer-inner">' +
        '<p class="footer-made">Gemaakt in Zandvoort</p>' +
        '<nav class="footer-nav">' + navLinks + '</nav>' +
        '<p class="footer-copy">&copy; 2026 Ongelooflijk B.V.</p>' +
        '</div>';

    document.currentScript.replaceWith(footer);
}());
