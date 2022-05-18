import React, { useState } from 'react'
import Header from '../../Layouts/Header'
import Drawer from '../../Layouts/Drawer'
import Footer from '../../Layouts/Footer'

// import { ThemeContext, Themes } from '../../Layouts/Themes/themeContext'

import { t } from "i18next";

const ArabNetwork = () => {
    const [drawer, drawerAction] = useState(false);
    const [lang, setLang] = useState(false);
    // const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <Drawer
                drawer={drawer}
                setDrawer={drawerAction}
            />
            <Header
                drawer={drawer}
                setDrawer={drawerAction}
            // darkMode={darkMode}
            // setDarkMode={setDarkMode}
            // themecontext={ThemeContext}
            // theme={Themes}
            />
            {
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, corporis recusandae doloremque sed repudiandae possimus placeat ipsam necessitatibus nisi eaque voluptates unde ut odio omnis adipisci error accusamus, iure tenetur magnam odit delectus aperiam nulla est reiciendis? Autem sequi in, quas dolorum ea laborum voluptas enim libero expedita dolore reiciendis porro itaque, provident distinctio quidem iste iusto corrupti necessitatibus esse nulla numquam dolores, accusantium iure. Neque, doloribus laudantium illo tenetur commodi sint maiores beatae! Non nihil minima fuga debitis repellendus quibusdam in saepe dolorum unde nisi. Ipsam quae animi sunt reprehenderit consequuntur perspiciatis ratione magni, deserunt, sapiente vitae eligendi accusantium odio eaque saepe quo nam sequi amet distinctio dolores ab. Expedita, illo dolorem incidunt consequuntur molestiae, ex veniam eaque voluptas sapiente ipsum repellat illum, voluptatum mollitia! Illo odio ducimus similique iste excepturi possimus molestiae nemo sed provident consequatur reprehenderit facere eos vero ullam rem dolor voluptatibus aliquam, necessitatibus, quis cum itaque dolores natus est mollitia! Laborum laboriosam nesciunt sint porro corporis. Ipsum ducimus libero, odio recusandae quaerat quidem tenetur deserunt dolor alias ea cum dignissimos maxime consectetur natus laudantium assumenda provident temporibus consequuntur quo velit, dolores corporis vero. Quas asperiores facilis ullam, officiis quibusdam perspiciatis repellendus beatae et. Architecto, cumque?"
            }
            <Footer />
        </>
    )
}

export default ArabNetwork