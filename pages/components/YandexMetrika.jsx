import { YMInitializer } from "react-yandex-metrika";

export default function Metrika() {
  // const pathName = usePathname();
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const url = pathName + "?" + searchParams.toString();
  //   ym(102283077, "hit", url);
  // }, [pathName, searchParams]);

  return (
    <YMInitializer
      accounts={[102283077]}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      }}
    />
  );
}
