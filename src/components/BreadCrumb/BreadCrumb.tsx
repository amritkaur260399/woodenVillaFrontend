import { Home } from "@/utils/AppIcons";
import Link from "next/link";
import { useRouter } from "next/router";

export function BreadCrumb() {
  const router = useRouter();
  const path = router.pathname;
  // console.log(path, "router");

  const segments = path.split("/").filter((segment) => segment !== "");
  const breadcrumbs = segments.map((segment, index) => ({
    name: segment,
    path: `/${segments.slice(0, index + 1).join("/")}`,
  }));

  return (
    <div className="absolute top-28 mt-6 w-full text-center">
      {breadcrumbs.map(({ name, path }, index) => (
        <div key={index} className="text-4xl font-bold text-white">
          <>
            <Link href={"/"}>
              <a>home</a>
            </Link>
            /
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </>
        </div>
      ))}
    </div>
  );
}
