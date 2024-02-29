import { Layout, LayoutProps } from "@/shared/ui/layout";

type Props = LayoutProps;

export default function BaseLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}
