import Link from "next/link";

const SongLink = ({ link, icon, name }) => {
  return (
    <Link href={link} passHref>
      <a target="_blank">
        <abbr title={name}>
          {icon}
        </abbr>
      </a>
    </Link>)
}

export default SongLink