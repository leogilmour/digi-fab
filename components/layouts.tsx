import { WeekNavBar } from "./navBar";

export function WeeklyWrapper({
  week,
  children,
}: {
  week: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <WeekNavBar week={week} />
      <div className="m-auto max-w-7xl">{children}</div>
    </div>
  );
}
