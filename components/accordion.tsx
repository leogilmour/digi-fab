import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon, Cross1Icon } from "@radix-ui/react-icons";
import { H3 } from "../app/projects/final-project/components";

export const Accordion = ({
  title,
  children,
  isRecentlyClosed = false,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  isRecentlyClosed?: boolean;
  onClose?: (title: string) => void;
}) => {
  const handleOpenChange = () => {
    // if (!open) {
    onClose?.(title);

    const element = document.getElementById(title);
    if (element) {
      // Method 1: Using scrollIntoView with manual offset
      const navBarHeight = 80; // Adjust this to match your navbar height
      const elementPosition = element.offsetTop - navBarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    // }
  };
  return (
    <Collapsible.Root
      id={title}
      className="border-df-shade mt-4 mb-6 border-b-2"
      onOpenChange={handleOpenChange}
    >
      <Collapsible.Trigger className="group flex w-full cursor-pointer items-center justify-between text-left hover:bg-[#0d277759] hover:opacity-90 focus:outline-none">
        <H3 color={isRecentlyClosed ? "text-df-accent" : undefined}>{title}</H3>
        <ChevronDownIcon className="text-df-shade h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content className="data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down overflow-hidden">
        <div className="border-df-shade-lighter mt-4">{children}</div>
        <Collapsible.Trigger className="group mt-4 flex w-full cursor-pointer items-center justify-between p-2 text-left focus:outline-none">
          <Cross1Icon className="text-df-shade h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          <p className="hover:text-df-accent text-df-shade bold w-full text-right tracking-widest uppercase underline underline-offset-4">
            Minimise {title} section
          </p>
        </Collapsible.Trigger>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
