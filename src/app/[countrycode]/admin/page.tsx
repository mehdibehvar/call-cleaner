import Link from "next/link";

const AdminHome = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={"/uk/admin/cdesc"}>create desc</Link>
          </li>
          <li>
            <Link href={"/uk/admin/cdesc"}>create desc</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHome;
