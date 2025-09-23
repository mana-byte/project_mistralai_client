import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import UploadForm from "./forms/uploadForm";

export default function Navbar() {
	return (
		<NavigationMenu>
			<NavigationMenuList>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Le Chat Gourmand</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Github</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>

			</NavigationMenuList>
		</NavigationMenu>
	);
}
