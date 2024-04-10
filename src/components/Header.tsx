export function Header() {
  return (
    <header style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div data-testid="subtotal">$ 0</div>
    </header>
  );
}
