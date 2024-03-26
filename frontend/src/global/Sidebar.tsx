import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	ListItemSuffix,
	Chip,
} from "@material-tailwind/react";
import {
	PresentationChartBarIcon,
	ShoppingBagIcon,
	UserCircleIcon,
	Cog6ToothIcon,
	InboxIcon,
	PowerIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
	return (
		<Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
			<div className="mb-2 p-4">
				<Typography variant="h5" color="blue-gray">
					GPT Compare
				</Typography>
			</div>
			<List>
				<ListItem>
					<ListItemPrefix>
						<PresentationChartBarIcon className="h-5 w-5" />
					</ListItemPrefix>
					Tab 1
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<ShoppingBagIcon className="h-5 w-5" />
					</ListItemPrefix>
					Tab 2
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<InboxIcon className="h-5 w-5" />
					</ListItemPrefix>
					Tab 3
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<UserCircleIcon className="h-5 w-5" />
					</ListItemPrefix>
					Tab 4
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<Cog6ToothIcon className="h-5 w-5" />
					</ListItemPrefix>
					Tab 5
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<PowerIcon className="h-5 w-5" />
					</ListItemPrefix>
					Log Out
				</ListItem>
			</List>
		</Card>
	);
}
