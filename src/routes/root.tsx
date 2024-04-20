export default function Root() {
  return (
    <>
      <div id="sidebar">

        <nav>
          <ul>
            <li>
              <a href={'/about'}>About</a>
            </li>
            <li>
              <a href={`/contacts/5`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>

    </>
  );
}