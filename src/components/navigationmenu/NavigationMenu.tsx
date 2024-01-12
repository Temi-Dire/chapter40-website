




const NavigationMenu = () => {
  return (
    <div>
      <header className="text-[24px] lg:text-4xl mb-[12px] lg:mb-[29px] text-black">Chapter40</header>
      {/* <div className="lg:p-[16px] font-montserrat text-borderDark lg:text-[20px] text-[15px] space-x-[20px] mb-[26px] sm:flex sm:flex-wrap">
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <NavLink to={item.path}>{item.label}</NavLink>
            {index < navigationItems.length - 1 && (
              <span className="ml-[20px] text-[#606060]">/</span>
            )}
          </React.Fragment>
        ))}
      </div> */}
    </div>
  );
};

export default NavigationMenu;
