'use client';

import { useState, useEffect } from 'react';

interface EnhancedOpeningHoursProps {
	title?: string;
	subtitle?: string;
	className?: string;
	showCurrentStatus?: boolean;
}

interface Schedule {
	day: string;
	hours: string;
	openTime?: string; // 24h format: "09:00"
	closeTime?: string; // 24h format: "18:00"
	isClosed?: boolean;
}

interface SpecialDay {
	date: string; // Format: "YYYY-MM-DD"
	name: string;
	hours: string;
	isClosed?: boolean;
}

const EnhancedOpeningHours: React.FC<EnhancedOpeningHoursProps> = ({
	                                                                   title = "Opening Hours",
	                                                                   subtitle = "Visit us during our business hours",
	                                                                   className = "",
	                                                                   showCurrentStatus = true,
                                                                   }) => {
	const [today, setToday] = useState<number>(0);
	const [currentStatus, setCurrentStatus] = useState<"open" | "closed">("closed");
	const [nextOpeningInfo, setNextOpeningInfo] = useState<string>("");
	const [upcomingSpecialDays, setUpcomingSpecialDays] = useState<SpecialDay[]>([]);

	// Regular schedule data
	const schedule: Schedule[] = [
		{ day: "Monday", hours: "9:00 AM - 6:00 PM", openTime: "09:00", closeTime: "18:00" },
		{ day: "Tuesday", hours: "9:00 AM - 6:00 PM", openTime: "09:00", closeTime: "18:00" },
		{ day: "Wednesday", hours: "9:00 AM - 6:00 PM", openTime: "09:00", closeTime: "18:00" },
		{ day: "Thursday", hours: "9:00 AM - 6:00 PM", openTime: "09:00", closeTime: "18:00" },
		{ day: "Friday", hours: "9:00 AM - 7:00 PM", openTime: "09:00", closeTime: "19:00" },
		{ day: "Saturday", hours: "10:00 AM - 4:00 PM", openTime: "10:00", closeTime: "16:00" },
		{ day: "Sunday", hours: "Closed", isClosed: true },
	];

	// Special days/holidays
	const specialDays: SpecialDay[] = [
		{ date: "2025-05-26", name: "Memorial Day", hours: "Closed", isClosed: true },
		{ date: "2025-07-04", name: "Independence Day", hours: "10:00 AM - 2:00 PM" },
		{ date: "2025-12-24", name: "Christmas Eve", hours: "9:00 AM - 3:00 PM" },
		{ date: "2025-12-25", name: "Christmas Day", hours: "Closed", isClosed: true },
	];

	useEffect(() => {
		const now = new Date();
		const currentDay = now.getDay();
		// Convert to our schedule array index (Sunday is 6 in our array)
		const todayIndex = currentDay === 0 ? 6 : currentDay - 1;
		setToday(todayIndex);

		// Check if today is a special day
		const todayStr = now.toISOString().split('T')[0];
		const isSpecialDay = specialDays.find(day => day.date === todayStr);

		// Determine if we're currently open
		if (isSpecialDay) {
			setCurrentStatus(isSpecialDay.isClosed ? "closed" : "open");
		} else {
			const todaySchedule = schedule[todayIndex];

			if (todaySchedule.isClosed) {
				setCurrentStatus("closed");
			} else {
				const currentTimeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
				setCurrentStatus(
					currentTimeStr >= todaySchedule.openTime! && currentTimeStr < todaySchedule.closeTime!
						? "open"
						: "closed"
				);
			}
		}

		// Get next opening time if closed
		if (currentStatus === "closed") {
			let nextDay = todayIndex;
			let daysToCheck = 7; // Prevent infinite loop

			while (daysToCheck > 0) {
				nextDay = (nextDay + 1) % 7;
				if (!schedule[nextDay].isClosed) {
					const nextDayName = nextDay === ((todayIndex + 1) % 7) ? "tomorrow" : schedule[nextDay].day;
					setNextOpeningInfo(`Opens ${nextDayName} at ${schedule[nextDay].hours.split('-')[0].trim()}`);
					break;
				}
				daysToCheck--;
			}
		}

		// Get upcoming special days (next 30 days)
		const upcomingDays = specialDays.filter(special => {
			const specialDate = new Date(special.date);
			const diffTime = specialDate.getTime() - now.getTime();
			const diffDays = diffTime / (1000 * 3600 * 24);
			return diffDays > 0 && diffDays <= 30;
		}).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

		setUpcomingSpecialDays(upcomingDays);
	}, []);

	return (
		<section className={`py-12 ${className}`}>
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-8">
						<h2 className="text-4xl font-bold mb-2 text-blue-700">{title}</h2>
						<p className="text-gray-600">{subtitle}</p>

						{showCurrentStatus && (
							<div className="mt-4 inline-block">
								<div className={`
                  inline-flex items-center px-4 py-2 rounded-full 
                  ${currentStatus === "open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                `}>
                  <span className={`
                    w-3 h-3 rounded-full mr-2 
                    ${currentStatus === "open" ? "bg-green-500" : "bg-red-500"}
                  `}></span>
									<span className="font-medium">
                    {currentStatus === "open" ? "We're Open Now" : "Currently Closed"}
                  </span>
									{currentStatus === "closed" && nextOpeningInfo && (
										<span className="ml-1 text-gray-600"> • {nextOpeningInfo}</span>
									)}
								</div>
							</div>
						)}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
						{/* Regular hours */}
						<div className="md:col-span-7">
							<div className="bg-white rounded-lg shadow-lg overflow-hidden">
								<div className="bg-blue-600 text-white py-3 px-6">
									<h3 className="text-lg font-medium">Regular Hours</h3>
								</div>
								<table className="w-full">
									<tbody>
									{schedule.map((item, index) => (
										<tr
											key={item.day}
											className={`
                          border-b border-gray-200 last:border-0
                          ${index === today ? 'bg-blue-50' : ''}
                          ${item.isClosed ? 'text-gray-500' : ''}
                        `}
										>
											<td className="py-4 px-6 font-medium">
												{item.day}
												{index === today && (
													<span className="ml-2 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">
                              Today
                            </span>
												)}
											</td>
											<td className="py-4 px-6 text-right">
												{item.hours}
											</td>
										</tr>
									))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Special hours */}
						<div className="md:col-span-5">
							<div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
								<div className="bg-amber-600 text-white py-3 px-6">
									<h3 className="text-lg font-medium">Upcoming Special Hours</h3>
								</div>

								{upcomingSpecialDays.length > 0 ? (
									<table className="w-full">
										<tbody>
										{upcomingSpecialDays.map((special) => (
											<tr
												key={special.date}
												className={`
                            border-b border-gray-200 last:border-0
                            ${special.isClosed ? 'text-gray-500' : ''}
                          `}
											>
												<td className="py-3 px-6">
													<div className="font-medium">{special.name}</div>
													<div className="text-sm text-gray-500">
														{new Date(special.date).toLocaleDateString('en-US', {
															weekday: 'short',
															month: 'short',
															day: 'numeric'
														})}
													</div>
												</td>
												<td className="py-3 px-6 text-right">
													{special.hours}
												</td>
											</tr>
										))}
										</tbody>
									</table>
								) : (
									<div className="p-6 text-center text-gray-500">
										No special hours in the next 30 days
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="mt-6 text-center text-gray-500 text-sm">
						<p>* Hours may be subject to change on holidays or special occasions</p>
						<p className="mt-1">Please call ahead if you're visiting us outside regular hours</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EnhancedOpeningHours;